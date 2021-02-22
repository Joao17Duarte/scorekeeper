import './Player.css'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <>
      <div className="Player">
        <h3>{name}</h3>
        <div className="Player__score">
          <button onClick={onMinus}>-</button>
          <span>{score}</span>
          <button onClick={onPlus}>+</button>
        </div>
      </div>
    </>
  )
}
