
export default function TypeCard({ type }) {
    return (
        <>
        <article className={`types ${type.className}`}>
            <img src={`/images/types/${type.img}`} alt={type.name} />
            <h3>{type.name}</h3>
        </article>
        </>
    )
}