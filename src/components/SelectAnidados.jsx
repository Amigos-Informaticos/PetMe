import React, {useState} from 'react';
import SelectList from './SelectList';

const SelectAnidados = ({handleChange, required}) => {
    const [state, setState] = useState('');
    const [town, setTown] = useState('');

    const TOKEN = '6ee6fb7c-5902-4281-8a40-41b9d9a89eb9';
    //TODO get_estadoss
    const stateURL = `https://api.copomex.com/query/get_estadosss?token=${TOKEN}`;

    const handleState = (e) => {
        setState(e.target.value);
        handleChange(e);
    };

    const handleTown = (e) => {
        setTown(e.target.value);
        handleChange(e);
    }
    return (
        <>                      
            <SelectList title="Estado" name="estado" url={stateURL} handleChange = {handleState} required/>
            {state && <SelectList title="Municipios" name="localidad" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange = {handleTown} required/>}            
        </>
    )
}

export default SelectAnidados;
