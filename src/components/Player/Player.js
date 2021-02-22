import './Player.css'

export default function Player({name, score}){
    return (
        <>
            <div>
                <h3>{name}</h3>
                <button>-</button>
                <span>{score}</span>
                <button>+</button>
            </div>
        </>
    )
}