import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/main.scss'
import { sanityClient } from './sanity/client'
import Layout from './components/Layout'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Teams from './components/Teams'
import Team from './components/Team'
import SearchResult from './components/SearchResult'
import Type from './components/Type'

//The use of Promise.all to run multiple asyncs, REMEMBER
//map() in a fetch

function App() {

  //Array of pokemons
  const [pokemon, setPokemon] = useState([])

  //Array for Sanity content
  const [teamsData, setTeamsData] = useState([])

  useEffect(() => {
  const getPokemon = async() => {
      try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
          const data = await response.json()
          const pokemonDetails = await Promise.all(
            data.results.map(pokemon => 
              fetch(pokemon.url)
              .then(response => 
              response.json())
            )
          )
          setPokemon(pokemonDetails)
      } catch (error) {
          console.error("Something went wrong. Again.", error)
      }
    }
    getPokemon()
  }, [])

  //Fetching the Sanity-content. Must be put in the useEffect, this is messy.
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
    <Layout >
      <Routes>
        <Route element={<Home pokemon={pokemon} />} path='/' exact />
        <Route element={<Pokemon pokemon={pokemon} />} path='/pokemons/:pokemonId' />
        <Route element={<Type pokemon={pokemon} />} path='/:type' />
        <Route element={<Teams teamsData={teamsData} />} path='/teams' />
        <Route element={<Team pokemon={pokemon} teamsData={teamsData} />} path='/teams/:team' />
        <Route element={<SearchResult pokemon={pokemon} />} path='/searchresult/:query' />
      </Routes>
    </Layout>
    </>
  )
}

export default App