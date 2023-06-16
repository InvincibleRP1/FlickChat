import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'
import '../navbar/navbar.css'
import { AuthContext } from '../../contexts/authContext'
export const TopNavigation = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <>
        <div className="top-navigation">
            <img src="https://ik.imagekit.io/qsdtqu5hp/flickchat-logo-removebg-preview.png?updatedAt=1686898029250" alt="" className='logo-img'/>

            <div className="search-box">
            
                <input type="text" placeholder='Search'/>
                
            
            </div>
            

            <FontAwesomeIcon icon={faToggleOn}
            className='display-mode'
            />

            <NavLink to="/test">API Test</NavLink>

            <p>Hi {currentUser?.firstName}</p>
        </div>
        </>
    )
}