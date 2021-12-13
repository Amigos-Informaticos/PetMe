import React, {useState} from 'react'
import SelectList from './SelectList';

const SelectAnidados = ({handleChange }) => {
    const [state, setState] = useState('');
    const [town, setTown] = useState('');
    const [suburb, setSuburb] = useState('');

    const TOKEN = '802a9697-db2f-469c-beeb-3fe84e1e585b';
    //get_estadoss
    const stateURL = `https://api.copomex.com/query/get_estadosss?token=${TOKEN}`;

    const handleState = (e) => {
        setState(e.target.value);
        handleChange(e);
    };

    const handleTown = (e) => {
        setTown(e.target.value);
        handleChange(e);
    }
    
    const handleSuburb = (e) => {
        setSuburb(e.target.value);
        handleChange(e);
    }
    return (
        <>                      
            <SelectList title="Estado" name="estado" url={stateURL} handleChange = {handleState}/>
            {state && <SelectList title="municipios" name="municipio" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange = {handleTown}/>}
            {town && <SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange = {handleSuburb}/>}            
        </>
    )
}

export default SelectAnidados;
