import PokeCard from './PokeCard'
import TypeCard from './TypeCard'
import { types } from '../assets/types'

export default function Home({ pokemon }) {
    return (
        <>
        <h1>Main Pokemons</h1>
        <section className="pokeCards">
            {pokemon.map(poke => 
            <PokeCard key={poke.id} poke={poke} />
            )}
        </section>

        <section className="typeCards">
            <h2>Types</h2>
            {types.map(type => 
            <TypeCard key={type.name} type={type} />
            )}
        </section>
        </>
    )
}