import "./Navbar.css"
import Search from './search/Search'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <nav >
            <h3> <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}><span style={{ color: "orange" }}>F</span>oodie</NavLink></h3>
            <Search />
            <ul>
                <li>
                    <NavLink className={`nav-font ${pathname === "/" ? 'nav-font-active' : null}`} to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={`nav-font ${pathname === '/fav' ? 'nav-font-active' : null}`} to={"/fav"}>Favroute</NavLink>
                </li>
            </ul>

        </nav >
    )
}

export default Navbar