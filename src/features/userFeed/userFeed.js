import "../userFeed/userFeed.css";

import { TopNavigation } from "../../components/navbar/navbar";
import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import { SideNav } from "../../components/sidenavbar/sidenav";
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion";
import { PostsPage } from "../../components/posts/posts";
import { AuthContext } from "../../contexts/authContext";
import { FooterSection } from "../../components/footer/footer";

export const UserFeedPage = () => {
  const { state, postsAfterSorting } = useContext(SocialDataContext);

  const { currentUser } = useContext(AuthContext);

  const usersInFollowList = currentUser?.following.reduce(
    (acc, user) => [...acc, user.username],
    []
  );


  const postsOnUserFeed = state?.posts.filter(
    (user) =>
      usersInFollowList?.includes(user.username) ||
      currentUser?.username === user.username
  );


  const postsOnDisplay = postsAfterSorting(postsOnUserFeed);
  

  return (
    <>
      <TopNavigation></TopNavigation>
      <div className="user-feed">
        <SideNav />

        <PostsPage postsOnFeed={postsOnDisplay} />
        
        <UserSuggestion />
        
      </div>
      <FooterSection />
    </>
  );
};
