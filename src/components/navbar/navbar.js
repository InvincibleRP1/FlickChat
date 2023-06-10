import { NavLink } from 'react-router-dom'
import '../navbar/navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
export const TopNavigation = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <>
        <div className="top-navigation">
            <p>Logo</p>

            <label htmlFor="">
                <input type="text" />
                Search
            </label>

            <p>Mode</p>
            <NavLink to="/test">API Test</NavLink>

            <p>Hi {currentUser?.firstName}</p>
        </div>
        </>
    )
}