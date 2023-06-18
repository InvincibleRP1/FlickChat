import { NavLink } from "react-router-dom";

import '../sidenavbar/sidenav.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export const SideNav = () => {

  const { token, handleLogout } = useContext(AuthContext);

  const activeStyle = ({isActive}) => {
    return {
      fontWeight : isActive ? "bolder" : "",
      fontSize: isActive ? "18px" : "",
      // textDecoration: isActive ? "underline" : ""
    }
  }

    return (
        <div>
            <div className="side-navigation">
          <NavLink className="sidenav-links"
          to="/"
          style={activeStyle}
          >Home</NavLink>

          <NavLink className="sidenav-links"
          to="/explore"
          style={activeStyle}
          >Explore</NavLink>

          <NavLink className="sidenav-links"
          to="/bookmarks"
          style={activeStyle}
          >Bookmarks</NavLink>

          <NavLink className="sidenav-links"
          to="/profile"
          style={activeStyle}
          >Profile</NavLink>

          {token ? <button className="sidenav-btn"
          onClick={handleLogout}
          >Logout</button> : <NavLink className="sidenav-btn"
          to="/login"
          >Login</NavLink>}
        </div>
        </div>
    )
}