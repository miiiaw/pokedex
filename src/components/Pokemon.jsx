import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { types } from '../assets/types'
import TypeCard from "./TypeCard"

export default function Pokemon({ pokemon }) {
    // Storing the slug in a variable and logging it
    const {pokemonId} = useParams()
    // Filtered array of the Pokemon
    const [pokemonDetails, setPokemonDetails] = useState([])
    // Variabel for URL for new API to fetch the ability details
    let aURL = []
    // Array for Ability details
    const [abilityDetails, setAbilityDetails] = useState([])
    // Array for specified Pokemon types
    const [pokemonTypes, setPokemonTypes] = useState([])
    

    // Filtering through the Pokemon-array and store the specified Pokemon in PokemonDetails.
    useEffect(() => {
        setPokemonDetails(pokemon?.filter(pokemon => Number(pokemon.id) === Number(pokemonId)))
    }, [pokemonId, pokemon])


    // Filtering matching Pokemontypes into a new array for map() and TypeCard later
    useEffect(() => {
      setPokemonTypes(types.filter(t => 
        pokemonDetails[0]?.types.some(pType => pType.type.name === t.name)
      ))
      
  }, [pokemonDetails])


    // Using map() to get the ability url.
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


    return (
        <>
        <h1>{pokemonDetails[0]?.name}</h1>
        <section className="pokemonDetails">
          
          <img src={pokemonDetails[0]?.sprites.front_default} alt="" className={pokemonTypes[0]?.className} />
          
          <div className="shortsContainer">
          <section className="typeCards">
            <h2>Type(s)</h2>
            {pokemonTypes.map(type => 
            <TypeCard key={type.name} type={type} />
            )}
          </section>
          
          <section className="stats">
            <h2>Stats</h2>
            <table>
            <tbody>
              {pokemonDetails[0]?.stats.map((stat,i) => (
              <tr key={i}>
                <td className="statName">{stat?.stat.name}</td>
                <td className="statValue">{stat?.base_stat}</td>
              </tr>
              ))}
            </tbody>
            </table>
          </section>
          </div>
          </section>
          
          <section className="abilityDetails">
            <h2>Abilities</h2>
            {abilityDetails.map((ability, index) => (
            <article key={index}>
              <h3>{ability?.name}</h3>
              <p>Effect: {ability?.effect_entries[0].effect}</p>
              <p>Short effect: {ability?.effect_entries[0].short_effect}</p>
            </article>
            ))}
          </section>

        </>
    )
}