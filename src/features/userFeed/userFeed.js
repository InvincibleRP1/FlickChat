import "../userFeed/userFeed.css";

import { TopNavigation } from "../../components/navbar/navbar";
import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import { SideNav } from "../../components/sidenavbar/sidenav";
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion";
import { PostsPage } from "../../components/posts/posts";
import { AuthContext } from "../../contexts/authContext";

export const UserFeedPage = () => {
  const { state } = useContext(SocialDataContext);

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

  const postsAfterSorting = (posts) => {
    let duplicatedPosts = [...posts];

    if (state?.sortValue === "trending") {
      return (duplicatedPosts = [...posts].sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      ));
    } else if (state?.sortValue === "latest") {
      return (duplicatedPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt)).reverse();
    }

    return duplicatedPosts;
  };

  const postsOnDisplay = postsAfterSorting(postsOnUserFeed);
  

  return (
    <>
      <TopNavigation></TopNavigation>
      <div className="user-feed">
        <SideNav />

        <PostsPage postsOnFeed={postsOnDisplay} />

        <UserSuggestion />
      </div>
    </>
  );
};
