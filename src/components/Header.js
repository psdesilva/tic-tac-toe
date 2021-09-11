const Header = ({ gameState, winner, currentPlayer }) => {
    
    let text;

    switch (gameState) {
        case 'start':
            text = `Tic Tac Toe`
            break;
        case 'inGame':
            text = `${currentPlayer.name}'s Turn (${currentPlayer.icon})`
            break;
        case 'Game-won':
            text = `${winner} wins!`
            break;
        case 'draw':
            text = `Draw!`
            break;
        default:
            text = 'Error!'
            break;
    } 

    return (
        <div className="header">
            <h1>{text}</h1>
        </div>
    )
}

export default Header
