import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon({ pokemon }) {
    // Storing the slug in a variable and logging it
    const {pokemonId} = useParams()
    // Filtered array of the Pokemon
    const [pokemonDetails, setPokemonDetails] = useState([])
    // Variabel for URL for new API to fetch the ability details
    let aURL = []
    // Array for Ability details
    const [abilityDetails, setAbilityDetails] = useState([])
    

    // Filtering through the Pokemon-array and store the specified Pokemon in PokemonDetails.
    useEffect(() => {
        setPokemonDetails(pokemon?.filter(pokemon => Number(pokemon.id) === Number(pokemonId)))
    }, [pokemonId, pokemon])

    pokemonDetails[0]?.abilities.map(abilities => (
        aURL.push(abilities.ability.url)
    ))


    // New API call to fetch ability details
    useEffect(() => {
        const getAbilityDetails = async () => {
          try {
            const results = await Promise.all(aURL.map(url =>
              fetch(url)
              .then(response => 
                response.json())
            )
            )
            setAbilityDetails(results)
          } catch (error) {
            console.error("Nope. Not today.", error)
          }
        };
    
        getAbilityDetails()
      }, [pokemonDetails])

      console.log(abilityDetails)

    return (
        <>
        <h1>{pokemonDetails[0]?.name}</h1>

        {abilityDetails.map((ability, index) => (
            <article key={index}>
                <h2>{ability?.name}</h2>
                <p>{ability?.effect_entries[0].effect}</p>




            </article>
        ))}
        </>
    )
}