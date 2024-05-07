import { useParams } from 'react-router-dom'
import PokeCard from './PokeCard'

export default function SearchResult({ pokemon }) {
    // Fetch search string with slug
    const { query } = useParams()
    // Filter and return a new array with the result
    const searchResults = pokemon.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
        <h1>Search results for: {query}</h1>
        <section className="pokeCards">
            {searchResults.length > 0 ? (
                searchResults.map(poke => (<PokeCard key={poke.id} poke={poke} />))
            ) : 
            ( <h2>Whoopsies, no pokemons found!</h2> )
            }
        </section>
        </>
    )
}


