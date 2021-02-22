import './PlayerForm.css'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <label>
          Add New Player:
          <br />
          <input type="text" name="player" placeholder="Add Player Name" />
        </label>
      </form>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}
