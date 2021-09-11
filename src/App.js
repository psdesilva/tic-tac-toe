import { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import NewBoard from './components/NewBoard';
import Start from './components/Start';

function App() {
  const [gameState, setGameState] = useState('start');
  const [winner, setWinner] = useState(null)
  const [playerNames, setPlayerNames] = useState({playerOne: {name: '', icon: 'X'}, playerTwo: {name: '', icon: 'O'}});
  const [currentPlayer, setCurrentPlayer] = useState({});

  const changePlayer = useCallback(
    () => {
      if (gameState !== 'inGame') {
        return;
      }
       else if (currentPlayer === playerNames.playerOne) {
          setCurrentPlayer (playerNames.playerTwo)
      } else {
          setCurrentPlayer(playerNames.playerOne)
      }
    },
    [gameState, currentPlayer, playerNames],
  )

  useEffect (() => {
    setCurrentPlayer(playerNames.playerOne)
  },[playerNames])

  const namePlayers = (names) => {
    setPlayerNames({playerOne: {name: names.playerOneName, icon: 'X'}, playerTwo: {name: names.playerTwoName, icon: 'O'}}); 
  }

  const onHome = () => {
    setGameState('start')
  }

  if (gameState === 'start') {
      return (
        <div className="container">
          <Header gameState={gameState} winner={winner} currentPlayer={currentPlayer} playerNames={playerNames}/>
          <Start onStart={namePlayers} setGameState={setGameState}/>
        </div>
      );
    } else if (gameState === 'inGame') {
      return (
        <div className="container">
          <Header gameState={gameState} winner={winner} currentPlayer={currentPlayer} playerNames={playerNames}/>
          <NewBoard currentPlayer={currentPlayer} changePlayer={changePlayer} setGameState={setGameState} setWinner={setWinner} gameState={gameState} playerNames={playerNames} onHome={onHome}/>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Header gameState={gameState} winner={winner} currentPlayer={currentPlayer} playerNames={playerNames}/>
          <NewBoard currentPlayer={currentPlayer} changePlayer={changePlayer} setGameState={setGameState} setWinner={setWinner} gameState={gameState} playerNames={playerNames} onHome={onHome}/>
        </div>
      );
    }
  } 

export default App;
