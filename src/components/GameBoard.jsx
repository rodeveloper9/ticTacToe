import React, { Fragment, useState } from 'react';
import BoardView from './views/BoardView';
import ModalBox from './views/Modal';
import PlayerForm from './views/PlayerNameForm';

const CreateBoard = () => {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("X");
    const [modalStatus, setModalStatus] = useState(true);
    const [firstPlayer, setFirstPlayer] = useState('');
    const [secondPlayer, setSecondPlayer] = useState('');

    /**
     * 
     * @param {*} sqValue 
     * @description when clicked on any square this function set the value of that square 
     */
    const handleSquareClick = (sqValue) => {
        setBoard(
            board.map((val, index) => {
                if (index === sqValue && val === '') {
                    return player
                }
                return val;
            })
        );
        if (player === 'X' && board[sqValue] === '') {
            setPlayer('0')
        }
        if (player === '0' && board[sqValue] === '') {
            setPlayer('X')
        }
    }

    /**
     * @description empty the board array
     */
    const handleReset = () => {
        setBoard(["", "", "", "", "", "", "", "", "", "", ""]);
    }

    /**
     * @description set fist player name
     */
    const setFirstPlayerName = (event) => {
        const { value = '' } = event.target
        setFirstPlayer(value)
    }

    /**
     * @description set second player name
     */
    const setSecondPlayerName = (event) => {
        const { value = '' } = event.target
        setSecondPlayer(value)
    }

    /**
     * @description handle exit button click 
     */
    const handleExit = () => {
        setModalStatus(true)
        setFirstPlayer('')
        setSecondPlayer('')
    }

    /**
     * @description stores the first and second player name and redirects to game
     */
    const handlePlayerSubmit = (e) => {
        e.preventDefault();
        if (!firstPlayer) alert('Please Enter First Player Name')
        if (!secondPlayer) alert('Please Enter Second Player Name')
        if (firstPlayer && secondPlayer) {
            setModalStatus(false)
        }
    }

    return (
        <Fragment>
            {modalStatus ?
                <ModalBox
                    openModal={modalStatus}
                    closeOnEsc={false}
                    closeOnOverlayClick={false}
                    showCloseIcon={false}
                    className={'getNameModal'}
                >
                    <PlayerForm
                        firstPlayer={firstPlayer}
                        secondPlayer={secondPlayer}
                        setFirstPlayerName={setFirstPlayerName}
                        setSecondPlayerName={setSecondPlayerName}
                        handleFormSubmit={handlePlayerSubmit}
                    />
                </ModalBox>
                :
                <BoardView
                    board={board}
                    handleSquareClick={handleSquareClick}
                    handleReset={handleReset}
                    firstPlayer={firstPlayer}
                    secondPlayer={secondPlayer}
                    handleExit={handleExit}
                />
            }
        </Fragment>
    )
}

export default CreateBoard
