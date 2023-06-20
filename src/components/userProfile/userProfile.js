import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { PostsPage } from "../posts/posts";

import Avatar from "react-avatar";

import "../userProfile/userProfile.css";
import { SocialDataContext } from "../../contexts/dataContext";
import { EditProfileModal } from "./editProfileModal";

export const UserProfile = ({ user }) => {
  const { currentUser } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    link: ""
})

  const { state, getIndividualPosts, handleFollowUser, handleUnfollowUser } = useContext(SocialDataContext);

  getIndividualPosts(user?.username);

  const sortedUserPosts = [...state?.userPosts]
    .sort((a, b) => b.createdAt - a.createdAt)
    .reverse();

  const editProfile = () => {
    setShowModal(prevVal => !prevVal);
    setFormData((formVal) => ({
        ...formVal,
        firstName: user?.firstName,
        lastName: user?.lastName,
        bio: user?.bio,
        link: user?.link
    })
    )
  }

  return (
    <div>

        
      <div className="profile-area">
      <EditProfileModal formData={formData} showModal={showModal} setShowModal={setShowModal} setFormData={setFormData}/>

      <div className="user-details-section">
      <Avatar
          round={true}
          src={user?.avatar}
          name={user?.firstName}
          size="120"
        />

        <div className="profile-info">
          <p>
            {user?.firstName} {user?.lastName}
          </p>

          <p className="username">@{user?.username}</p>
        </div>

        {currentUser?.username === user?.username ? (
          <button className="profile-action-btn"
          onClick={editProfile}
          >Edit Profile</button>
        ) : currentUser?.following?.some(
            ({ username }) => username === user?.username
          ) ? (
          <button className="profile-action-btn close-btn"
          onClick={() => handleUnfollowUser(user._id)}
          >Unfollow</button>
        ) : (
          <button className="profile-action-btn"
          onClick={() => handleFollowUser(user._id)}
          >Follow</button>
        )}

        <p>{user?.bio}</p>

        <a href={user?.link} target="_blank" className="user-link">
          {user?.link}
        </a>
        <br />

        <div className="social-details">
          <div className="user-socials">
            <p>{user?.followers?.length}</p>
            <p>Followers</p>
          </div>

          <div className="user-socials">
            <p>{state?.userPosts?.length}</p>
            <p>Posts</p>
          </div>

          <div className="user-socials">
            <p>{user?.following?.length}</p>
            <p>Following</p>
          </div>
        </div>

      </div>

        
        <div className="user-post-area">
          {sortedUserPosts?.length > 0 && (
            <p>
              {currentUser?.username === user?.username
                ? `Your`
                : `${user?.firstName}'s`}{" "}
              Posts
            </p>
          )}
          <PostsPage postsOnFeed={sortedUserPosts} />
        </div>
      </div>
    </div>
  );
};
