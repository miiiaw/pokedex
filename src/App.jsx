import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/main.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Teams from './components/Teams'
import SearchResult from './components/SearchResult'


function App() {

  const [pokemon, setPokemon] = useState([])
  const [searchString, setSearch] = useState("")



  const getPokemon = async() => {
      let URL = "https://pokeapi.co/api/v2/pokemon?limit=9"

      try{
          const response = await fetch(URL)
          const data = await response.json()
          data.results.forEach(pokemon => {
            getPokemonDetails(pokemon)
          })

      } catch (error) {
          console.error("Something went wrong. Again.", error)
      }
  }


  async function getPokemonDetails(pokemonDetails){
    let URL = pokemonDetails.url

    try{
      const response = await fetch(URL)
      const data = await response.json()
      setPokemon(prevPokemon => [...prevPokemon, data])
    } catch (error) {
      console.error("PenguinPoop.", error)
  }
  }

console.log(pokemon)

useEffect(() => {
  getPokemon();
}, [])


  return (
    <>
    <Layout >
      <Routes>
        <Route element={<Home pokemon={pokemon} />} path='/' exact />
        <Route element={<Pokemon />} path='/pokemon/:slug' />
        <Route element={<Teams />} path='/Teams' />
        <Route element={<SearchResult />} path='/searchresult' />
      </Routes>
    </Layout>
    </>
  )
}

export default App
