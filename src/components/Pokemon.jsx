import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon({ pokemon }) {
    // Storing the slug in a variable and logging it
    const {pokemonId} = useParams()
    console.log(pokemonId)

    // Filtered array of the Pokemon
    const [pokemonDetails, setPokemonDetails] = useState([])
    // Filtering through the Pokemon-array and store the specified Pokemon in PokemonDetails.
    useEffect(() => {
        const filteredPokemon = pokemon.filter(pokemon => Number(pokemon.id) === Number(pokemonId))
        setPokemonDetails(filteredPokemon)
    }, [pokemonId, pokemon])

    console.log(pokemonDetails)


    return (
        <>
        {pokemonDetails.map(pokemon => (
            <section id="pokemonDetails" key={pokemon.id}>
                <h1>{pokemon.name}</h1>
                <article>
                    <h2>Stats</h2>
                </article>
                <article>
                    <h2>Abilities</h2>
                    {pokemon.abilities.map((ability, abilityIndex) => (
                    <h3 key={abilityIndex}>
                        {ability.ability.name}
                    </h3>
                    ))}
                </article>
            </section>
        ))}
        <section>
        <h2>HeiiS</h2>

        </section>
        </>
    )
}