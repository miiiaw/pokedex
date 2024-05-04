import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PokeCard from "./PokeCard"

export default function Team({ teamsData, pokemon }) {
    //Fetching the slug
    const { team } = useParams()
    //Array for the team
    const [teamInfo, setTeamInfo] = useState([])
    //Array for the team's pokemons
    const [teamPokemon, setTeamPokemon] = useState([])

    //Filtering teams on the slug
    useEffect(() => {
        setTeamInfo(teamsData.filter(t => t.title === team))
    }, [team, teamsData])

    //Filtering pokemons
    useEffect(() => {
        if (teamInfo.length > 0 && teamInfo[0].pokemon && pokemon) {
            setTeamPokemon(pokemon.filter(poke => teamInfo[0].pokemon.includes(poke.name)
        ))}
    }, [teamInfo, pokemon])



    return (
    <>
    <h1>Team {team} pokemon</h1>
    <section className="pokeCards">
        {teamPokemon.map(poke => <PokeCard key={poke.id} poke={poke} /> )}
    </section>
    
    </>
    )
}
