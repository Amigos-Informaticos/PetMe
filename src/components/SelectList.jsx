import React from 'react';
import useFetch from '../hooks/useFetch';
import { Loader } from './Loader';
import { Message } from './Message';

const SelectList = ({title, name, url, handleChange}) => {
    const {data, error, loading} = useFetch(url);
    console.log(data, error, loading);   
    
    if(!data) return null;

    if(error){
        <Message msg = {`Error ${error.status}: ${error.statusText}`} backgroundColor = "#dc3545"/>
    }

    let id = `select-${title}`;    
    
    let optionsValues = data.response[title.toLowerCase()];

    return (
        <div>
            <label htmlFor={id}>{title}</label>
            {loading && <Loader />}
            <select name={name} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {data && optionsValues.map((element)=><option key = {element} value={element}>{element}</option>)}
            </select>
        </div>
    )
}

export default SelectList
