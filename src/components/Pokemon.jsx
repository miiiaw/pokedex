import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon({ pokemon }) {
    // Storing the slug in a variable and logging it
    const {pokemonId} = useParams()
    console.log(pokemonId)
    // Array for Ability facts
    const [abilityNames, setAbilityNames] = useState([])
    // Array for Ability facts
    const [abilityFacts, setAbilityFacts] = useState([])
    // Filtered array of the Pokemon
    const [pokemonDetails, setPokemonDetails] = useState([])
    // Filtering through the Pokemon-array and store the specified Pokemon in PokemonDetails.
    useEffect(() => {
        const filteredPokemon = pokemon.filter(pokemon => Number(pokemon.id) === Number(pokemonId))
        setPokemonDetails(filteredPokemon)
    }, [pokemonId, pokemon])

    // Nytt API kall for å hente informasjon om abilities
    useEffect(() => {
        pokemonDetails.map(pokemon => {
            pokemon.abilities.map(async (ability) => {
                const response = await fetch(ability.ability.url)
                const data = await response.json()
                setAbilityNames(data)
                setAbilityFacts(data.effect_entries)
            })
        })
    }, [pokemonDetails])

    console.log(abilityFacts)
    console.log(abilityNames)

    return (
        <>
        {pokemonDetails.map(pokemon => (
        <article key={pokemon.id}>
            <h1>{pokemon.name}</h1>

            {pokemon.abilities.map((ability, i) => (
            <h3 key={i}>
                {ability.ability.name}
            </h3>
            

            ))}
        </article>
        ))}
        
        {abilityFacts.map((ability, index) => (
            <article key={index}>
                <p>Effect: {ability.effect}</p>
                <p>Short effect: {ability.short_effect}</p>
            </article>
            ))}

        </>
    )
}