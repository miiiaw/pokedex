import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"



export default function Type({ pokemon }) {

    const {type} = useParams()

    const [pokemonTypes, setPokemonTypes] = useState([])


    useEffect(()=>{
    const getTypes = async()=>{
        try{
          const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
          const data = await response.json()
          setPokemonTypes(data)
        }catch{
          console.error("Det har skjedd en feil")
        }
      }
        getTypes()
      },[])

    console.log(pokemonTypes.name)



    return (
        <>
        <h1>Hello</h1>
        </>
    )
}