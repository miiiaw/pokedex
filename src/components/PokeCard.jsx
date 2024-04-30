

export default function PokeCard({ pokemon }) {

    
    return (
        <>
            {pokemon.map(poke => 
                <article key={poke.id}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="" />
                    <h3>{poke.name}</h3>
                    <span># {poke.id}</span>
                </article>
            )}
        </>
    )
}