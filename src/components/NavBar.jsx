import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function NavBar() {
    // Storing for the search string
    const [searchQuery, setSearchQuery] = useState('')

    // Is this used right? It works, but must read more, REMEMBER
    const navigate = useNavigate()

    //Fetch and use the queryyyy
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/searchresult/${searchQuery}`);
    }
    // Links menu, a bit unnecessary with only one link, but oh well.
    const links = [
        { path: '/teams', name: 'Teams' },
    ]

    return (
        <>
        <header>
            <nav>
                <span className="pageLogo"><Link to='/'>UIN Pokedex</Link></span>
                <ul>
                    {links.map(link => (
                        <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
                    ))}
                </ul>

                <form onSubmit={handleSubmit}>
                    <input type="text" id="searchBox" placeholder="search here..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                    <input type="submit" id="searchButton" value="OK"></input>
                </form>
            </nav>
        </header>
        </>
    )
}
