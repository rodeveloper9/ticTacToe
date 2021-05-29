import React from 'react';

const Square = (props) => {
    const { value = '', handleSquareClick } = props;
    const filledClass = value ? 'filled' : '';
    return (
        <div className={`squareWrap ${filledClass}`} onClick={handleSquareClick}>
            {value}
        </div>
    )
}

export default Square
