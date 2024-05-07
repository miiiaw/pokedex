import { Link } from "react-router-dom"

export default function Teams({ teamsData }) {

    return (
        <>
        <section className="teamsPage">
            <h1>Teams</h1>
                {teamsData.map((team, index) => (
                    <Link to={`/teams/${team.title}`} key={index} aria-label={`Link to the team ${team.title} Pokemons`}>
                        <article className="teamCard">
                            <h2>Team {team.title}</h2>
                            <img src={team.teamImage.asset.url} alt={team.teamImage.alt} aria-label={`Picture of the team ${team.title} logo`}/>
                        </article>
                    </Link>
                ))}
        </section>
        </>
    )
}