import React from 'react';
import PropTypes from 'prop-types';

const Message = ({className, msg, backgroundColor}) => {
    let styles = {
        padding: '1rem',
        marginBottom: '1rem',
        textAlign: 'center',
        backgroundColor,
        fontWeight: 'bold',                
    }
    return (
        <div className={className} style={styles}>
            <p>{msg}</p>
        </div>
    )
}

Message.propTypes = {
    msg: PropTypes.string,
    backgroundColor: PropTypes.string
};

export {Message};