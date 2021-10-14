import { useState } from 'react';
import connection from '../helpers/Connection';

export const useForm = (initialForm, validateForm, endpoint = '') => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null); 

  const handleChange = (event) => {
    const { name, value } = event.target;    

    setForm(
      {
      ...form,
      [name]: value,
      }
    );
  };

  const handleBlur = (event) => {
    handleChange(event);
    setError(validateForm(form));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      setLoading(true);
      connection()
        .post(`http://amigosinformaticos.ddns.net:42070/${endpoint}`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
          },
          body: form,
        })
        .then(() => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
        });
    }
  };

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
