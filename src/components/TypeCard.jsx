import { Link } from "react-router-dom"

export default function TypeCard({ type }) {
    return (
        <>
        <Link to={`/${type.name}`} aria-label={`Link to the type ${type.name} Pokemons`}>
            <article className={`types ${type.className}`}>
                <img src={`/images/types/${type.img}`} alt={type.name} aria-label={`A picture of the type ${type.name} icon`} />
                <h3>{type.name}</h3>
            </article>
        </Link>
        </>
    )
}