import React from 'react';

const Footer = (props) => {
    const { handleReset, handleExit } = props;
    return (
        <div className="gameFooter">
            <button className="gameFooter__btn" onClick={() => handleReset()}>Reset</button>
            <button className="gameFooter__btn" onClick={() => handleExit()}>Exit</button>
        </div>
    )
}

export default Footer
