import { createContext, useEffect, useReducer } from "react";

import { initialState, socialReducer } from "../reducer/socialDetailsReducer";

export const SocialDataContext = createContext();

export const SocialDetailsHandler = ({ children }) => {
  const [state, dispatch] = useReducer(socialReducer, initialState);

  const handleAPI = async () => {
    const response = await fetch("/api/posts");
    const { posts } = await response.json();

    dispatch({ type: "initialize-posts", posts: posts });

    const res = await fetch("/api/users");
    const { users } = await res.json();

    dispatch({ type: "initialize-users", users: users });
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <SocialDataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SocialDataContext.Provider>
  );
};
