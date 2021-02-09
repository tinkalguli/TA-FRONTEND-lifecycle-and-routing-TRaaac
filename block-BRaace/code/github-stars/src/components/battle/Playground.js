export default function Playground(props) {
  const {firstPlayer, secondPlayer} = props.players;

  return (
    <>
      <h2 className="heading">Instructions</h2>
      <ul className="instructions">
        <li>👥 Enter two Github users</li>
        <li>⚔️ Battle</li>
        <li>🍻 See the winner</li>
      </ul>
      <h2 className="heading">Players</h2>
      <div className="flex-between forms">
        {
          [...Object.entries(props.players)].map((player, i) => (
            <form key={i} onSubmit={props.handleSubmit} className="flex">
              {
                player[1]?.message === "Not Found"
                ? <input
                    type="text"
                    className="error-input"
                    name={player[0]} />
                : player[1]
                ? <div className="flex small-card">
                    <img className="small-avatar" alt="avatar" src={player[1]?.avatar_url} />
                    <h4>{player[1]?.name}</h4>
                  </div>
                : <input type="text" name={player[0]} placeholder="Enter username" />
              }
              {
                player[1]
                ? <button
                    name={player[0]}
                    onClick={props.handleCancel}
                    className="btn">❌️</button>
                : <button className="btn" type="submit">Submit</button>
              }
            </form>
          ))
        }
      </div>
      <button
        onClick={props.playBattle}
        className={
          firstPlayer?.name && secondPlayer?.name
          ? "btn btn-big"
          : "btn btn-big disable-button"
        }
      >Battle</button>
    </>
  )
}