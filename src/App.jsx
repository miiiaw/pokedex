import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/main.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Teams from './components/Teams'
import SearchResult from './components/SearchResult'

//The use of Promise.all to run multiple asyncs

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
  const getPokemon = async() => {

      try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
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

console.log(pokemon)


  return (
    <>
    <Layout >
      <Routes>
        <Route element={<Home pokemon={pokemon} />} path='/' exact />
        <Route element={<Pokemon pokemon={pokemon} />} path='/pokemons/:pokemonId' />
        <Route element={<Teams />} path='/Teams' />
        <Route element={<SearchResult />} path='/searchresult/:pokemon' />
      </Routes>
    </Layout>
    </>
  )
}

export default App