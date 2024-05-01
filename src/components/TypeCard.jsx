
export default function TypeCard({ type }) {
    return (
        <>
        <article className={`types ${type.className}`}>
            <img src={`images/types/${type.img}`} alt="" />
            <h3>{type.name}</h3>
        </article>
        </>
    )
}