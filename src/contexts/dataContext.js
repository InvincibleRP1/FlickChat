import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { initialState, socialReducer } from "../reducer/socialDetailsReducer";
import { AuthContext } from "./authContext";

export const SocialDataContext = createContext();

export const SocialDetailsHandler = ({ children }) => {
  const [state, dispatch] = useReducer(socialReducer, initialState);

  const { token, currentUser, setCurrentUser } = useContext(AuthContext);

  const handleAPI = async () => {
    const response = await fetch("/api/posts");
    const { posts } = await response.json();

    dispatch({ type: "initialize-posts", posts: posts });

    const res = await fetch("/api/users");
    const { users } = await res.json();

    dispatch({ type: "initialize-users", users: users });
  };

  const postsLikedByUser = () => {
    const likedPosts = state?.posts?.filter((post) => {
      const {
        likes: { likedBy },
      } = post;

      return likedBy.find(({ username }) => username === currentUser?.username);
    });

    return likedPosts;
  };

  const handleLikes = async (postId) => {
    try {
      if (token) {
        const response = await fetch(`/api/posts/like/${postId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
        });

        const { posts } = await response.json();

        dispatch({ type: "initialize-posts", posts: posts });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDislikes = async (postId) => {
    try {
      if (token) {
        const response = await fetch(`/api/posts/dislike/${postId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
        });

        const { posts } = await response.json();

        dispatch({ type: "initialize-posts", posts: posts });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Bookmarks

  const addToBookmarks = async (postId) => {
    try {
      if (token) {
        const response = await fetch(`/api/users/bookmark/${postId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
        });

        const { bookmarks } = await response.json();

        setCurrentUser({ ...currentUser, bookmarks });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const postPresentInBookmarks = (postId) => {
    const bookmarkedPost = currentUser?.bookmarks.some((id) => id === postId);

    return bookmarkedPost;
  };

  const removeFromBookmarks = async (postId) => {
    try {
      if (token) {
        const response = await fetch(`/api/users/remove-bookmark/${postId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
        });

        const { bookmarks } = await response.json();

        setCurrentUser({ ...currentUser, bookmarks });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Follow / Unfollow

  const handleFollowUser = async(userId) => {

    try {
      const response = await fetch(`/api/users/follow/${userId}`, {
        method: "POST",
        headers: {
          authorization: token,
        }
      });

      const { user, followUser } = await response.json();

      console.log(user, followUser);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handleAPI();
  }, []);

  // console.log("Posts: ", state?.posts);
  console.log(currentUser);

  return (
    <SocialDataContext.Provider
      value={{
        state,
        dispatch,
        handleLikes,
        handleDislikes,
        postsLikedByUser,
        addToBookmarks,
        postPresentInBookmarks,
        removeFromBookmarks,
        handleFollowUser
      }}
    >
      {children}
    </SocialDataContext.Provider>
  );
};
