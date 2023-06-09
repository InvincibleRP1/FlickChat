import { NavLink } from 'react-router-dom'
import '../navbar/navbar.css'
export const TopNavigation = () => {

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
        </div>
        </>
    )
}