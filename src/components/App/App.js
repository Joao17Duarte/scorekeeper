import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'
import './App.css'

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={name => console.log(name)} />

      <Player
        name="John Doe"
        score="20"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />
      <Player
        name="Jane Doe"
        score="30"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />
      <Button
        text="Reset Scores"
        className="ResetBtn"
        onClick={() => console.log('reset scores')}
      />

      <Button
        text="Reset All"
        className="ResetBtn"
        onClick={() => console.log('reset all')}
      />
    </div>
  )
}

export default App
