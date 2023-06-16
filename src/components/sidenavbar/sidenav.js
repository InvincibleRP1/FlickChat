import { NavLink } from "react-router-dom";

import '../sidenavbar/sidenav.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export const SideNav = () => {

  const { token, handleLogout } = useContext(AuthContext);

    return (
        <div>
            <div className="side-navigation">
          <NavLink className="sidenav-links">Home</NavLink>

          <NavLink className="sidenav-links">Explore</NavLink>

          <NavLink className="sidenav-links">Bookmarks</NavLink>

          <NavLink className="sidenav-links">Profile</NavLink>

          {token ? <button className="sidenav-btn"
          onClick={handleLogout}
          >Logout</button> : <NavLink className="sidenav-btn"
          to="/login"
          >Login</NavLink>}
        </div>
        </div>
    )
}