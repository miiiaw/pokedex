import { Link } from "react-router-dom"

export default function Teams({ teamsData }) {

    return (
        <>
        <section className="teamsPage">
            <h1>Teams</h1>
                {teamsData.map((team, index) => (
                    <Link to={`/teams/${team.title}`} key={index}>
                        <article className="teamCard">
                            <h2>Team {team.title}</h2>
                            <img src={team.teamImage.asset.url} alt={team.teamImage.alt} />
                        </article>
                    </Link>
                ))}
        </section>
        </>
    )
}