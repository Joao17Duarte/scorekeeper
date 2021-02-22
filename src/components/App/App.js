import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerForm />
      <Player name="John Doe" score="20"/>
      <Player name="Jane Doe" score="30"/>
      <button>Reset Scores</button>
      <button>Reset All</button>
    </div>
  );
}

export default App;
