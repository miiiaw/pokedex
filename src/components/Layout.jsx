import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <>
        <div id="container">
            <NavBar />
            <main>
                {children}
            </main>
        </div>
        </>
    )
}