import React from 'react';
import Header from './Header';
import Square from './Square';
import Footer from './Footer';

const BoardView = (props) => {
    const { board = [], handleSquareClick, handleReset, firstPlayer = '', secondPlayer = '', handleExit } = props;
    return (
        <div className="boardContainer">
            <Header
                headTxt={'Tic Tac Toe'}
                firstPlayer={firstPlayer}
                secondPlayer={secondPlayer}
            />
            <div className="boardContainer__row">
                <Square
                    value={board[0]}
                    handleSquareClick={(e) => handleSquareClick(0)}
                />
                <Square
                    value={board[1]}
                    handleSquareClick={(e) => handleSquareClick(1)}
                />
                <Square
                    value={board[2]}
                    handleSquareClick={(e) => handleSquareClick(2)}
                />
            </div>
            <div className="boardContainer__row">
                <Square
                    value={board[3]}
                    handleSquareClick={(e) => handleSquareClick(3)}
                />
                <Square
                    value={board[4]}
                    handleSquareClick={(e) => handleSquareClick(4)}
                />
                <Square
                    value={board[5]}
                    handleSquareClick={(e) => handleSquareClick(5)}
                />
            </div>
            <div className="boardContainer__row">
                <Square
                    value={board[6]}
                    handleSquareClick={(e) => handleSquareClick(6)}
                />
                <Square
                    value={board[7]}
                    handleSquareClick={(e) => handleSquareClick(7)}
                />
                <Square
                    value={board[8]}
                    handleSquareClick={(e) => handleSquareClick(8)}
                />
            </div>
            <Footer
                handleReset={handleReset}
                handleExit={handleExit}
            />
        </div>
    )
}

export default BoardView
