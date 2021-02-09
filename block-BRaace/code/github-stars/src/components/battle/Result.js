
export default function Playground(props) {
  const {players, winner} = props;
  return (
    <>
      <div className="profile-cards flex-between">
        {
          players.map((player, i) => (
            <article key={i} className="profile-card-container">
              <h3 className="result">
                {
                  winner==="match"
                  ?"It's a match"
                  :player.login === winner
                  ?"Winner🥳"
                  :"Looser"
                }
              </h3>
              <section className="profile-card">
              {player.username}
                <img src={player.avatar_url} alt="user avatar"/>
                <h3 className="username">{player.login}</h3>
                <ul className="profile-info">
                  <li>{player.name}</li>
                  <li>{player.company}</li>
                  <li>{player.location}</li>
                  <li>{player.followers} Followers</li>
                  <li>{player.following} Followings</li>
                  <li>{player.public_repos} Repos</li>
                </ul>
              </section>
            </article>
          ))
        }
      </div>
      <button
        onClick={props.handleReset}
        className="btn btn-big reset-btn">Reset</button>
    </>
  )
}