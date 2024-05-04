import { Link } from "react-router-dom"

export default function TypeCard({ type }) {
    return (
        <>
        <Link to={`/${type.name}`} >
            <article className={`types ${type.className}`}>
                <img src={`/images/types/${type.img}`} alt={type.name} />
                <h3>{type.name}</h3>
            </article>
        </Link>
        </>
    )
}