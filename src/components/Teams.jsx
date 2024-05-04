import { sanityClient } from "../sanity/client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Teams() {

    const [teamsData, setTeamsData] = useState([])

    //Kan flyttes til Sanity Services-mappe. Se projects-fil for annen struktur.
    async function fetchData() {
        const data = await sanityClient.fetch(`*[_type == "team"]{
            title,
            slug,
            pokemon,
            teamImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
    }`)
    setTeamsData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <section className="teamsPage">
            <h1>Teams</h1>
                {teamsData.map((team, index) => (
                    <Link to="" key={index}>
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