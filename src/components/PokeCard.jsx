import { Link } from "react-router-dom"

export default function PokeCard({ poke }) {

    
    return (
        <>
        <Link to={`/pokemons/${poke.id}`} aria-label={`Link to the Pokemon ${poke.name}`}>
        <article>
            <img src={poke.sprites.front_default} alt={`This is a picture of the Pokemon ${poke.name}`} aria-label={`This is a picture of the Pokemon ${poke.name}`} />
            <h3>{poke.name}</h3>
            <span># {poke.id}</span>
        </article>
        </Link>
        </>
    )
}