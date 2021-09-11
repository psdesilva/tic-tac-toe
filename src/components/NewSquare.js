const NewSquare = ({ currentSquare, onSquareClick, style }) => {

    return (
        <div className="square" onClick={()=>onSquareClick(currentSquare.id)} style={style}>
            <h1>{currentSquare.value}</h1>
        </div>
    )
}

export default NewSquare
