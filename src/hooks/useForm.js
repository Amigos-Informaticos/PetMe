import { useState } from 'react';
import connection from '../helpers/Connection';

export const useForm = (initialForm, validateForm, endpoint = '', token = null) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const [bodyResponse, setBodyResponse] = useState(null)

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

  const handleForm = (newForm) => {    
      setForm({
        ...form,
        ...newForm
      });    
  }

  const handleSubmit = (event, isMultipart = false) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      setLoading(true);      
      let formData = new FormData();
      if(isMultipart){
        for(let [key, value] of Object.entries(form)) {          
          formData.append(key, value);
        }        
      }
      connection()
        .post(`https://amigosinformaticos.ddns.net:42070/${endpoint}`, {
          headers: {
            'Content-Type': 'application/json', 
            Accept: 'application/json',
            Token: token
          },
          body: form,
        })
        .then((response) => {          
          setStatusCode(response.status);
          response.json().then(json => {            
            setBodyResponse(json);
            setLoading(false);
            setResponse(true);
            setForm(initialForm);
            setTimeout(() => {
              setResponse(false);                   
            }, 3000);
          })          
        }).catch(({err: error, status, statusText})=> {          
          setResponse(true);
          setTimeout(() => {
            setResponse(false);                   
          }, 3000);
          setLoading(false);
          setStatusCode(status);
        });
    }
  };

  return {
    form,
    error,
    loading,
    response,    
    statusCode,
    handleChange,
    handleBlur,
    handleSubmit,
    handleForm,
    bodyResponse
  };
};

export default useForm;
