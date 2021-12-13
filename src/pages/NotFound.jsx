import React from 'react';
import './NotFound.css';

const NotFound = ({layoutPosition}) => {
    return (
        <>
            <article className={`not-found ${layoutPosition}`}>
                <h2>No se encontró la página que buscaba</h2>            
            </article>
        </>
    )
}

export default NotFound;
