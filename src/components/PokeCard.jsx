import { Link } from "react-router-dom"

export default function PokeCard({ poke }) {

    
    return (
        <>
        <Link to={`/pokemons/${poke.id}`} >
        <article>
            <img src={poke.sprites.front_default} alt="" />
            <h3>{poke.name}</h3>
            <span># {poke.id}</span>
        </article>
        </Link>
        </>
    )
}