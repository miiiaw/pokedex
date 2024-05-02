import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon({ pokemon }) {
    // Storing the slug in a variable and logging it
    const {pokemonId} = useParams()

    // Array for Ability facts
    const [abilityDetails, setAbilityDetails] = useState([])

    // Filtered array of the Pokemon
    const [pokemonDetails, setPokemonDetails] = useState([])

    // Filtering through the Pokemon-array and store the specified Pokemon in PokemonDetails.
    useEffect(() => {
        const filteredPokemon = pokemon.filter(pokemon => Number(pokemon.id) === Number(pokemonId))
        setPokemonDetails(filteredPokemon)
    }, [pokemonId, pokemon])

    // New API call to fetch ability details
    useEffect(() => {
        const fetchAbilities = async () => {
            const abilities = []
    
            for (const pokemon of pokemonDetails) {
                for (const ability of pokemon.abilities) {
                    const response = await fetch(ability.ability.url)
                    const data = await response.json()
                    abilities.push(data)
                }
            }
    
            setAbilityDetails(abilities)
        }
            fetchAbilities()
    }, [pokemonDetails])
    

    return (
        <>
        {pokemonDetails.map(pokemon => (
            <h1 key={pokemon.id}>{pokemon.name}</h1>
        ))}

        {abilityDetails.map((ability, index) => (
            <article key={index}>
                <h2>{ability.name}</h2>



                
            </article>
        ))}
        </>
    )
}