import React from 'react';

const InputField = (props) => {
    const { type = '', className = '', placeholder = '', value = '', handleInputChange } = props;
    return (
        <input
            type={type}
            className={`inputField ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleInputChange (e)}
        />
    )
}

export default InputField
