import { useState, useEffect } from 'react'
import NewSquare from './NewSquare'
import Button from './Button';

const NewBoard = ({ currentPlayer, changePlayer, setGameState, setWinner, gameState, playerNames, onHome }) => {
    const [board, setBoard] = useState([
        { id: 1, value: '', win: false },
        { id: 2, value: '', win: false },
        { id: 3, value: '', win: false },
        { id: 4, value: '', win: false },
        { id: 5, value: '', win: false },
        { id: 6, value: '', win: false },
        { id: 7, value: '', win: false },
        { id: 8, value: '', win: false },
        { id: 9, value: '', win: false }
    ]);

    const clickSquare = (id) => {
        if (gameState === 'inGame') {
            board.forEach((square) => {
                if (square.id === id) {
                    if (square.value === '') {
                        setBoard(board.map((square) => square.id === id ? { ...square, value: currentPlayer.icon } : square));
                        changePlayer();
                    } else {
                        return;
                    }
                }
            })
        }
    }

    const onReset = () => {
        setBoard([
            { id: 1, value: '', win: false },
            { id: 2, value: '', win: false },
            { id: 3, value: '', win: false },
            { id: 4, value: '', win: false },
            { id: 5, value: '', win: false },
            { id: 6, value: '', win: false },
            { id: 7, value: '', win: false },
            { id: 8, value: '', win: false },
            { id: 9, value: '', win: false }
        ])
        setGameState('inGame')
    }

    useEffect(() => {
        let winner=null;
        let winningSquares  = [];
        
        const findWinner = (winningIcon) => {
            const playerNamesArray = Object.values(playerNames);
            const found = playerNamesArray.find(player => player.icon === winningIcon);
            winner = found.name;
        }

        const assignWinSquares = (array) => {
            setBoard(
                board.map((square) => 
                    array.includes(square) ? { ...square, win:true } : square
                )
            )
        }

        const winConditions = (a,b,c) => {
            if (board[a].value === board[b].value
                && board[a].value === board[c].value
                && board[a].value !== '') {
                    findWinner(board[a].value)
                    winningSquares = [board[a], board[b], board[c]]
                    if (gameState === 'inGame') {
                        assignWinSquares(winningSquares)
                    }
                    return true;
                }
        }

        const drawGame = (square) => square.value !== '';

        if(winConditions(0,1,2) || winConditions(3,4,5) || winConditions(6,7,8) || winConditions(0,3,6) || winConditions(1,4,7) || winConditions(2,5,8) || winConditions(0,4,8) || winConditions(2,4,6)) {
            setGameState('Game-won')
            setWinner(winner)
        } else if (board.every(drawGame)) {
            setGameState('draw')
        } else {
            return;
        }
    }, [board, setWinner, setGameState, playerNames, gameState])

    return (
        <div id="game">
            <div id="board">
                {board.map((square) => (
                    square.win ? <NewSquare key={square.id} currentSquare={square} onSquareClick={clickSquare} style={{ color: "tomato" }}/> : <NewSquare key={square.id} currentSquare={square} onSquareClick={clickSquare} />
                ))}
            </div>
            <div className="btns"><Button text="Home" onHome={onHome}/> <Button text="Reset" onReset={onReset}/></div>
        </div>
    )
}

export default NewBoard
