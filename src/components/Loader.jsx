import React from 'react';
import './Loader.css';
import PropTypes from 'prop-types';

const Loader = ({className}) => {
    return (
        <div className={`${className} lds-dual-ring`}></div>
    )
}

Loader.propType = {
    className: PropTypes.string,

};

export {Loader}; 
