import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";

import { initialState, socialReducer } from "../reducer/socialDetailsReducer";
import { AuthContext } from "./authContext";

export const SocialDataContext = createContext();

export const SocialDetailsHandler = ({ children }) => {
  const [state, dispatch] = useReducer(socialReducer, initialState);

  const [formData, setFormData] = useState({
    content: "",
    image: null
  });

  const [editFormData, setEditFormData] = useState({
    content: "",
    image: null
  });

  

  const { token, currentUser, setCurrentUser } = useContext(AuthContext);

  const handleAPI = async () => {
    const response = await fetch("/api/posts");
    const { posts } = await response.json();

    dispatch({ type: "initialize-posts", posts: posts });

    const res = await fetch("/api/users");
    const { users } = await res.json();

    dispatch({ type: "initialize-users", users: users });
  };

  // Users

  const getSingleUser = async(userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);

      const { user } = await response.json();

     dispatch({type: "individual-user-profile", profile: user});

    } catch (error) {
      console.log(error.message);
    }
  }

  const editUserProfile = async(dataByUser) => {
    try {
      const response = await fetch('/api/users/edit', {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({userData: dataByUser})
      });

      const { user } = await response.json();
      
      setCurrentUser(user);

    } catch (error) {
      console.log(error.message);
    }
  }

  // Posts

  const handleCreatePosts = async(postData) => {

    try {
      if(token)
      {
        const response = await fetch("/api/posts", {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({postData: {
            content: postData?.content,
            image: postData?.image
          }})
        });

       const { posts } = await response.json();

       dispatch({ type: "initialize-posts", posts: posts });

      }
    } catch (error) {
      console.log(error.message);
    }
  }


  const deletePosts = async(postId) => {
    try {
      if(token)
      {
        const response = await fetch(`/api/posts/${postId}`, {
          method: "DELETE",
            headers: {
              authorization: token,
            }
        })
  
        const { posts } = await response.json();
  
        dispatch({ type: "initialize-posts", posts: posts });
      }
     

    } catch (error) {
      console.log(error.message);
    }
  }

  const getIndividualPosts = async(username) => {
    try {
      const response = await fetch(`/api/posts/user/${username}`);

      const { posts } = await response.json();

      dispatch({type: "individual-user-posts", posts});

    } catch (error) {
      console.log(error.message);
    }
  }
  
  const editPost = async(postId, postData) => {
    try {
      const response = await fetch(`/api/posts/edit/${postId}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({postData: {
          content: postData?.content,
          image: postData?.image
        }})
      });

      const { posts } = await response.json();

      dispatch({ type: "initialize-posts", posts: posts });

    } catch (error) {
      console.log(error.message);
    }
  }

  // Likes - Dislikes

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

  
  // Follow / Unfollow

  const handleFollowUser = async (userId) => {
    try {
      if (token) {
        const response = await fetch(`/api/users/follow/${userId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
        });

        const { user, followUser } = await response.json();

       setCurrentUser({...user, following: [...currentUser.following, followUser]})

       const newListOfUsers = state?.users.map((userOriginal) => userOriginal._id === followUser?._id ? followUser : userOriginal);

       console.log("follow list: ", newListOfUsers)

       dispatch({ type: "initialize-users", users: newListOfUsers 
      });

      dispatch({type: "individual-user-profile", profile: followUser});

      dispatch({ type: "remove-suggested-user", userId });
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  const handleUnfollowUser = async(userId) => {
    console.log(userId);
    try {
      if(token)
      {
        const response = await fetch(`/api/users/unfollow/${userId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
        });

        const { user, followUser } = await response.json();

        setCurrentUser(user);

        const newListOfUsers = state?.users.map((userOriginal) => userOriginal._id === followUser?._id ? followUser : userOriginal);

       console.log("unfollow list: ", newListOfUsers)

       dispatch({ type: "initialize-users", users: newListOfUsers 
      });

      dispatch({type: "individual-user-profile", profile: followUser});

      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // Sort Posts
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

  
  useEffect(() => {
    handleAPI();
  }, [currentUser?.following, currentUser?.followers]);

 

  return (
    <SocialDataContext.Provider
      value={{
        state,
        dispatch,

        handleCreatePosts,
        deletePosts,
        editPost,
        getIndividualPosts,
        postsAfterSorting,
        
        handleLikes,
        handleDislikes,
        postsLikedByUser,


        handleFollowUser,
        handleUnfollowUser,

        getSingleUser,
        editUserProfile,

        formData,
        setFormData,

        editFormData,
        setEditFormData
      }}
    >
      {children}
    </SocialDataContext.Provider>
  );
};
