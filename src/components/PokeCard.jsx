import { Link } from "react-router-dom"

export default function PokeCard({ poke }) {

    
    return (
        <>
        <Link to={`/pokemons/${poke.name}`} >
        <article>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="" />
            <h3>{poke.name}</h3>
            <span># {poke.id}</span>
        </article>
        </Link>
        </>
    )
}