export default function PokeCard({ poke }) {

    
    return (
        <>
        <article>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="" />
            <h3>{poke.name}</h3>
            <span># {poke.id}</span>
        </article>
        </>
    )
}