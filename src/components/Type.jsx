import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"


export default function Type({ pokemon }) {
  
  //Fetching the slug
  const {type} = useParams()
  //Fetching the types with pokemon names list
  const [pokemonTypes, setPokemonTypes] = useState([])
  //New array with matching pokemons
  const[sortedPokemon, setSortedPokemon] = useState([])
  
  //Fetch Pokemon-names for the tyype
  useEffect(() => {
    const getTypes = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = await response.json()
        setPokemonTypes(data.pokemon.map(poke => poke.pokemon.name))
      } catch {
        console.error("Ups, something went wrong.")
      }
    }
    getTypes()
  }, [type])

  //Filter pokemon on the matching names
  useEffect(() => {
    setSortedPokemon(pokemon.filter(poke => pokemonTypes.includes(poke.name)))
  }, [pokemon, pokemonTypes])
  


    return (
        <>
        <h1>Type: {type}</h1>
        <section className="pokeCards">
            {sortedPokemon.map(poke => <PokeCard key={poke.id} poke={poke} />)}
        </section>
          
        </>
    )
}