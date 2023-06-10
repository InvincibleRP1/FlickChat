import "../userFeed/userFeed.css";
import { TopNavigation } from "../../components/navbar/navbar";
import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import { SideNav } from "../../components/sidenavbar/sidenav";
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion";
import { PostsPage } from "../../components/posts/posts";

export const UserFeedPage = () => {
  const { state, dispatch } = useContext(SocialDataContext);

  return (
    <>
      <TopNavigation></TopNavigation>
      <div className="user-feed">
        <SideNav />

        <PostsPage postsOnFeed={state?.posts.slice(0, 3)} />

        <UserSuggestion />
      </div>
    </>
  );
};
