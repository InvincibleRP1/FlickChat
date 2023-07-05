import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "../navbar/navbar.css";
import { AuthContext } from "../../contexts/authContext";



export const TopNavigation = () => {
  const { currentUser, token } = useContext(AuthContext);

  return (
    <>
      <div className="top-navigation">
        <img
          src="https://ik.imagekit.io/qsdtqu5hp/flickchat-logo-removebg-preview.png?updatedAt=1686898029250"
          alt=""
          className="logo-img"
        />

        <div className="nav-details">
          
          {token && <NavLink className="current-user" to="/profile">Hi, {currentUser?.firstName}</NavLink>}
        </div>

        
      </div>
    </>
  );
};
