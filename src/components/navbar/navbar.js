import { useContext } from "react";

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

          {/* <FontAwesomeIcon icon={faToggleOn} className="display-mode" /> */}
          
          {token && <p className="current-user">Hi, {currentUser?.firstName}</p>}
        </div>

        
      </div>
    </>
  );
};
