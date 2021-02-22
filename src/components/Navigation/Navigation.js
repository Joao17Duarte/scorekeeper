import './Navigation.css'

export default function Navigation(onNavigate) {
  return (
    <>
      <nav className="Navigation">
        <button className="Button" onClick={onNavigate}>
          Play
        </button>
        <button className="Button" onClick={onNavigate}>
          History
        </button>
      </nav>
    </>
  )
}
