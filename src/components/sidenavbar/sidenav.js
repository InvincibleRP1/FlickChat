import { NavLink } from "react-router-dom";

import '../sidenavbar/sidenav.css';

export const SideNav = () => {

    return (
        <div>
            <div className="side-navigation">
          <NavLink className="sidenav-links">Home</NavLink>

          <NavLink className="sidenav-links">Explore</NavLink>

          <NavLink className="sidenav-links">Bookmarks</NavLink>

          <NavLink className="sidenav-links">Profile</NavLink>
          {/* <NavLink>
                Logout
            </NavLink> */}

          <button className="sidenav-btn">Login</button>
        </div>
        </div>
    )
}