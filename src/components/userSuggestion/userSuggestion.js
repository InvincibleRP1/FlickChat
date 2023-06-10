import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import "../userSuggestion/userSuggestion.css";

export const UserSuggestion = () => {
  const { state, dispatch } = useContext(SocialDataContext);

  return (
    <>
      <div className="user-list-area">
        <h1>Users</h1>
      </div>
    </>
  );
};
