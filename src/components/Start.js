import { useState } from 'react'

const Start = ( { onStart, setGameState } ) => {
    const [playerOneName, setPlayerOneName] = useState('');
    const [playerTwoName, setPlayerTwoName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!playerOneName || !playerTwoName) {
            alert('Please enter names for both players')
            return;
        }

        onStart({ playerOneName, playerTwoName })
        setGameState('inGame')
    }

    return (
        <form id="start-page" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Player 1:</label>
                <input type="text" 
                placeholder="Name"
                maxLength="10"
                value={playerOneName}
                onChange={(e) => setPlayerOneName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Player 2:</label>
                <input type="text"
                placeholder="Name"
                maxLength="10"
                value={playerTwoName}
                onChange={(e) => setPlayerTwoName(e.target.value)} />
            </div>
            <button type="submit" form="start-page">Start</button>
        </form>
    )
}

export default Start
