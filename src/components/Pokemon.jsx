import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon({ pokemon }) {

    const {pokemonName} = useParams()
    console.log(pokemonName)

    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        if (pokemon) { 
            const filteredPokemon = pokemon.filter(pokemon => pokemon.name === pokemonName);
            setPokemonDetails(filteredPokemon);
        }
    }, [pokemonName, pokemon])



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
                </article>
            </section>
        ))}
        </>
    )
}