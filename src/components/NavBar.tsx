import { NavLink } from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar">
            <span><NavLink to="/">Home</NavLink></span>
            <span><NavLink to="/todo">TodoPage</NavLink></span>
            <span><NavLink to="/profile/@Alexis">@Alexis</NavLink></span>
            <span><NavLink to="/profile/@Megane">@Megane</NavLink></span>
            <span><NavLink to="/profile/@Emmanuel">@Emmanuel</NavLink></span >
        

        </div>
    )
}
export default Navbar;