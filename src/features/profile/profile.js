import { useContext } from 'react'
import { TopNavigation } from '../../components/navbar/navbar'
import { SideNav } from '../../components/sidenavbar/sidenav'
import { UserProfile } from '../../components/userProfile/userProfile'
import { UserSuggestion } from '../../components/userSuggestion/userSuggestion'
import { AuthContext } from '../../contexts/authContext'
export const ProfilePage = () => {

   const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <TopNavigation />
            <SideNav />
            <UserSuggestion />
            <UserProfile user={currentUser}/>
        </div>
    )
}