import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import "../userSuggestion/userSuggestion.css";
import { AuthContext } from "../../contexts/authContext";

export const UserSuggestion = () => {
  const { state, dispatch, handleFollowUser } = useContext(SocialDataContext);

  const { token, currentUser } = useContext(AuthContext);

  const filteredUsers = state?.users.filter((user) => user.username !== currentUser?.username);

  return (
    <>
      <div className="user-list-area">
        <h3>Suggested Users</h3>
        <ul className="user-lists">
          {filteredUsers.map((user) => {

            const {_id, firstName, lastName, username} = user;

            return (
              <div key={_id}>
              <li className="user-details" >

              <p className="user-names">{firstName} {lastName} <br />
              <span>@{username}</span>
              </p>

              <button className="user-area-action-btns"
              onClick={() => handleFollowUser(_id)}
              >Follow</button>
              </li>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
};
