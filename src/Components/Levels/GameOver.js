import gameOver from '../../resources/game-over.jpg'

const GameOver = () =>
{
    return(
        <div className="game-over">
            <img src={gameOver} alt="" />
        </div>
    )
}

export default GameOver