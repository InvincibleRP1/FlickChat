import { useContext } from "react";
import { TopNavigation } from "../../components/navbar/navbar";
import { PostsPage } from "../../components/posts/posts";
import { SideNav } from "../../components/sidenavbar/sidenav";
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion";
import { SocialDataContext } from "../../contexts/dataContext";

export const ExplorePage = () => {
  const { state, postsAfterSorting } = useContext(SocialDataContext);

  const postsOnDisplay = postsAfterSorting(state?.posts)

  return (
    <div>
      <TopNavigation />
      <SideNav />
      <UserSuggestion />

      <div>
        <h2 className="page-heading">Explore</h2>
        <PostsPage postsOnFeed={postsOnDisplay} />
      </div>
    </div>
  );
};
