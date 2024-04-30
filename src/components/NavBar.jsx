import { Link } from "react-router-dom";

export default function NavBar() {

    const links = [
        { path: '/teams', name: 'Teams' },
        { path: '/searchresult', name: 'Search results' },
    ]

    return (
        <>
        <header>
            <nav>
                <ul>
                    <span className="pageLogo"><Link to='/'>Pokedex</Link></span>
                    {links.map(link => (
                        <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
                    ))}
                </ul>
                <form>
                    <input type="text" id="searchBox" placeholder="search here..." ></input>
                    <input type="submit" id="searchButton" value="OK" ></input>
                </form>
            </nav>
        </header>
        </>
    )
}