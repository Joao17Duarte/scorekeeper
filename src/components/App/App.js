import { useState } from 'react'
import PlayerForm from '../PlayerForm/PlayerForm'
import GameForm from '../GameForm/GameForm'
import Player from '../Player/Player'
import Button from '../Button/Button'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Header title={'GameNameApp'} />
      <GameForm />
      <PlayerForm onAddPlayer={addPlayer} />
      <br />
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button text={'Reset scores'} onClick={resetScores}></Button>
      <Button text={'Reset all'} onClick={resetAll}></Button>
      <Navigation onNavigate={() => console.log('click')} />
    </div>
  )

  function onPlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }
  function onMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }
  function addPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.length + 1 }])
  }
  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }
  function resetAll() {
    setPlayers([])
  }
}

export default App
