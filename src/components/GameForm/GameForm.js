import Button from '../Button/Button'
import './GameForm.css'

export default function GameForm({ onCreateGame }) {
  return (
    <>
      <form className="GameForm">
        <label>
          Name of Game:
          <br />
          <input
            type="text"
            name="gameName"
            placeholder="Add name for the Game"
          />
        </label>
        <label>
          Players names:
          <br />
          <input
            type="text"
            name="playerName"
            placeholder="Add Players names"
          />
        </label>
        <Button onSubmit={handleSubmit} text={'Create Game'} />
      </form>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onCreateGame(name)
    form.reset()
    input.focus()
  }
}
