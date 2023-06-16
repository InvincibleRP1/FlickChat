export const initialState = {
  posts: [],
  users: [],
  sortValue: ""
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

    default:
      return currentState;
  }
};
