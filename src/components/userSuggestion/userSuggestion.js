import { useContext } from "react";
import Avatar from "react-avatar";

import { SocialDataContext } from "../../contexts/dataContext";
import "../userSuggestion/userSuggestion.css";
import { AuthContext } from "../../contexts/authContext";

export const UserSuggestion = () => {
  const { state, dispatch, handleFollowUser } = useContext(SocialDataContext);

  const { token, currentUser } = useContext(AuthContext);

  const handleSearchValue = (e) => {
    dispatch({type: "search-value", value: e.target.value});
  }

  const filteredUsers = state?.users.filter(
    (user) =>
      user.username !== currentUser?.username &&
      !currentUser?.following.some(
        (followedUser) => followedUser.username === user.username
      )
  );

  const usersOnList = filteredUsers.filter((user) => user.firstName.trim().toLowerCase().includes(state?.searchValue.trim().toLowerCase()) || user.lastName.toLowerCase().trim().includes(state?.searchValue.toLowerCase().trim() || user.username.trim().toLowerCase().includes(state?.searchValue.toLowerCase().trim())));


  return (
    <>
      <div className="user-list-area">

      <div className="search-box">
            
            <input type="text" placeholder='Search'
            onChange={handleSearchValue}
            />
            
        </div>
        <h3>Suggested Users</h3>
        <ul className="user-lists">
          {usersOnList.length > 0 && usersOnList?.map((user) => {
            const { _id, firstName, lastName, username, avatar, bio } = user;

            return (
              <div key={_id}>
                <li className="user-details">
                  <Avatar
                    round={true}
                    src={avatar}
                    name={firstName}
                    size="50"
                  />

                  <p className="user-names">
                    {firstName} {lastName} <br />
                    <span>@{username}</span>
                  </p>

                  <button
                    className="user-area-action-btns"
                    onClick={() => handleFollowUser(_id)}
                  >
                    Follow
                  </button>
                </li>
              </div>
            );
          })}

          {usersOnList.length === 0 && <p>No such user found!</p>}
        </ul>
      </div>
    </>
  );
};
