/* eslint-disable react/prop-types */
import React from 'react'

export const Message = ({msg, backgroundColor}) => {
    let styles = {
        padding: '1rem',
        marginBottom: '1rem',
        textAlign: 'center',
        backgroundColor,
        fontWeight: 'bold',
        
    }
    return (
        <div style = {styles}>
            <p>{msg}</p>
        </div>
    )
}