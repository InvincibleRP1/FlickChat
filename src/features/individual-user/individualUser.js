import { useContext } from "react";
import { useParams } from "react-router-dom"
import { SocialDataContext } from "../../contexts/dataContext";
import { TopNavigation } from "../../components/navbar/navbar";
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion";
import { UserProfile } from "../../components/userProfile/userProfile";
import { SideNav } from "../../components/sidenavbar/sidenav";


export const IndividualUser = () => {

    const { state } = useContext(SocialDataContext);

    return (
        <div>
            <TopNavigation />
            <SideNav />
            <UserSuggestion />

            <UserProfile user={state?.userProfile}/>
        </div>
    )
}