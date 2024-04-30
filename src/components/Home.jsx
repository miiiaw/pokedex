import PokeCard from './PokeCard'
import TypeCard from './TypeCard'

export default function Home() {
    return (
        <>
        <h1>The home page</h1>
        <section id="pokeCards">
            <PokeCard />
        </section>

        <section id="typeCards">
            <TypeCard />
        </section>
        </>
    )
}