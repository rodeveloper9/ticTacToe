import React from 'react';

const Header = (props) => {
    const { headTxt = '', firstPlayer = '', secondPlayer = '' } = props;
    return (
        <div className="gameHead">
            <h2 className="gameHead__text">{headTxt}</h2>
            <div className="gameHead_paraContain">
                {firstPlayer && <p className="gameHead__para">Player 1:{firstPlayer}</p>}
                {secondPlayer && <p className="gameHead__para">Player 2:{secondPlayer}</p>}
            </div>
        </div>
    )
}

export default Header
