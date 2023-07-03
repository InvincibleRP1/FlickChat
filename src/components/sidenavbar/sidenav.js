import { NavLink, useLocation } from "react-router-dom";

import "../sidenavbar/sidenav.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faBookmark,
  faUser,
  faSignOut,
  faSignIn,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { AddPostModal } from "../postModal/addPost";
import { SocialDataContext } from "../../contexts/dataContext";
import { useEffect } from "react";

export const SideNav = () => {
  const { token, handleLogout } = useContext(AuthContext);

  const [showCreatePostModal, setCreatePostModal] = useState(false);

  const { state, dispatch } = useContext(SocialDataContext);

  const location = useLocation();

  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "",
      fontSize: isActive ? "18px" : "",
      background: isActive ? `rgb(96, 50, 50, 0.4)` : "",
      padding: isActive ? "10px" : "",
      borderRadius: isActive ? "20px" : "",
    };
  };

  const handleAddPost = () => {
    setCreatePostModal((prev) => !prev);

    dispatch({ type: "create-modal", value: !state?.createModal });
  };

  useEffect(() => {
    dispatch({ type: "create-modal", value: false });
  }, [location.pathname !== "/profile"]);

  return (
    <div>
      <div className="side-navigation">
        <NavLink className="sidenav-links" to="/" style={activeStyle}>
          <FontAwesomeIcon icon={faHome} className="nav-icon" />

          <span className="nav-icon icon-desc">Home</span>
        </NavLink>

        <NavLink className="sidenav-links" to="/explore" style={activeStyle}>
          <FontAwesomeIcon icon={faCompass} className="nav-icon" />

          <span className="nav-icon icon-desc">Explore</span>
        </NavLink>

        <NavLink className="sidenav-links" to="/bookmarks" style={activeStyle}>
          <FontAwesomeIcon icon={faBookmark} className="nav-icon" />

          <span className="nav-icon icon-desc">Bookmarks</span>
        </NavLink>

        <NavLink className="sidenav-links" to="/profile" style={activeStyle}>
          <FontAwesomeIcon icon={faUser} className="nav-icon" />

          <span className="nav-icon icon-desc">Profile</span>
        </NavLink>

        <div className="sidenav-links add-btn" onClick={handleAddPost}>
          <FontAwesomeIcon icon={faPlus} />
          <span> Create</span>
        </div>

        {showCreatePostModal && (
          <AddPostModal
            setCreatePostModal={setCreatePostModal}
            showCreatePostModal={showCreatePostModal}
          />
        )}

        {token ? (
          <div className="sidenav-links sidenav-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOut} />
            <span>Log Out</span>
          </div>
        ) : (
          <NavLink className="sidenav-btn" to="/login">
            <FontAwesomeIcon icon={faSignIn} />
          </NavLink>
        )}
      </div>
    </div>
  );
};
