import { NavLink } from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar">
            <span><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/todo">TodoPage</NavLink></span>
            <span><NavLink to="/freelancePage">Freelance</NavLink></span>
            <span><NavLink to="/profile/@Alexis">Mon profil</NavLink></span>
        </div>
    )
}
export default Navbar;