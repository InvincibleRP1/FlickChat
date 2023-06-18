import { useContext } from "react"
import { TopNavigation } from "../../components/navbar/navbar"
import { PostsPage } from "../../components/posts/posts"
import { SideNav } from "../../components/sidenavbar/sidenav"
import { AuthContext } from "../../contexts/authContext"
import { SocialDataContext } from "../../contexts/dataContext"
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion"

export const BookmarksPage = () => {

    const { currentUser } = useContext(AuthContext);

    const { state, postsAfterSorting } = useContext(SocialDataContext);

    const userBookmarksID = currentUser?.bookmarks;

    const bookmarksOfUser = state?.posts.filter((post) => userBookmarksID.includes(post._id));


    const postsOnDisplay = postsAfterSorting(bookmarksOfUser);


    return (
        <div>
         <TopNavigation />
         <SideNav />

         <UserSuggestion />

         <h2 className="page-heading">Your Bookmarks</h2>
         {bookmarksOfUser?.length === 0 ? <p className="no-bookmarks-title">No posts bookmarked</p> : 
         <PostsPage postsOnFeed={postsOnDisplay}/>
         }
         
        </div>
    )
}