export const initialState = {
  posts: [],
  users: [],
  sortValue: "",
  searchValue: "",
  userPosts: [],
  userProfile: [],
  createModal: false
};

export const socialReducer = (currentState, action) => {
  switch (action.type) {
    case "initialize-posts":
      return { ...currentState, posts: action.posts };

    case "initialize-users":
      return { ...currentState, users: action.users };

    case "remove-suggested-user":
      return {
        ...currentState,
        users: currentState.users.filter((user) => user._id !== action.userId),
      };
    
    case "post-sort-method":
     return {
      ...currentState,
      sortValue: action.value
     }

     case "search-value":
      return {...currentState,
      searchValue: action.value}

    case "individual-user-posts":
      return {...currentState,
      userPosts: action.posts
      }

    case "individual-user-profile":
      return {...currentState,
      userProfile: action.profile
      }

    case "create-modal":
      return {...currentState,
      createModal: action.value
      }

    default:
      return currentState;
  }
};
