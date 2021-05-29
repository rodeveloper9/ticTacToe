import React from 'react';
import Input from './FormField/InputField';
import Header from './Header';

const GetPlayerName = (props) => {
    const { firstPlayer = '', secondPlayer, setFirstPlayerName, setSecondPlayerName, handleFormSubmit } = props;
    return (
        <form className="playerForm">
            <Header
                headTxt={'Enter Player Name to Start'}
            />
            <Input
                type={'text'}
                placeholder={'First Player Name'}
                value={firstPlayer}
                handleInputChange={setFirstPlayerName}
            />
            <Input
                type={'text'}
                placeholder={'First Player Name'}
                value={secondPlayer}
                handleInputChange={setSecondPlayerName}
            />
            <button className="playerForm__btn" onClick={(e) => handleFormSubmit(e)}>Start Game</button>
        </form>
    )
}

export default GetPlayerName
