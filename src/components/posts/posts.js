import { useContext, useState } from "react";
import Avatar from "react-avatar";

import { SocialDataContext } from "../../contexts/dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faBookmark,
  faShare,
  faEllipsis,
  faImage,
  faFaceSmile,
  faFire,
  faRefresh
} from "@fortawesome/free-solid-svg-icons";

import "../posts/posts.css";
import { AuthContext } from "../../contexts/authContext";

export const PostsPage = ({ postsOnFeed }) => {
  const { handleCreatePosts, deletePosts, dispatch, state } = useContext(SocialDataContext);

  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState("");
  const [postUpdate, setPostUpdate] = useState("");

  const getFormValue = (e) => {
    setFormData(e.target.value);
  };

  const createPost = () => {
    if (formData !== "") {
      handleCreatePosts(formData);
    }

    setFormData("");
  };

  const {
    handleLikes,
    handleDislikes,
    postsLikedByUser,
    addToBookmarks,
    postPresentInBookmarks,
    removeFromBookmarks,
    handleUnfollowUser
  } = useContext(SocialDataContext);

  const likePost = (postId) => {
    handleLikes(postId);
  };

  const dislikePost = (postId) => {
    handleDislikes(postId);
  };

  const handleSortValue = (sortValue) => {
    dispatch({ type: "post-sort-method", value: sortValue });
  };

  // Post-Update

  const handlePostUpdation = (postId) => {
    setPostUpdate((prevVal) => (prevVal === postId ? null : postId));
  };
  
  const unfollowUser = (userId) => {
    console.log(userId);
    handleUnfollowUser(userId);
  }

  return (
    <>
      <div className="post-area">
        <div className="create-post-section">
          <Avatar
            round={true}
            src={currentUser?.avatar}
            size="50"
            className="post-avatar"
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="post-box"
            placeholder="Share whats on your mind"
            onChange={getFormValue}
            value={formData}
          ></textarea>
        </div>

        <div className="create-post-area">
          <FontAwesomeIcon icon={faImage}
          className="post-info"
          />
          <FontAwesomeIcon icon={faFaceSmile}
          className="post-info"
          />

          <button className="post-create-btn" onClick={createPost}>
            Post
          </button>
        </div>

        <hr />

        <div className="sort-posts-area">

          <div onClick={() => handleSortValue("trending")}
          className="sort-action-btn"
          >
          <FontAwesomeIcon
            icon={faFire}
         />
            <span>Trending</span>
          </div>
          
          

        <div onClick={() => handleSortValue("latest")}
         className="sort-action-btn"
        >

        <FontAwesomeIcon
            icon={faRefresh}
          />
            <span>Latest</span>
        </div>
          
          
        </div>

        {postsOnFeed.map((post) => {
          const {
            _id,
            content,
            image,
            likes: { likeCount, likedBy, dislikedBy },
            fullname,
            username,
            createdAt,
          } = post;


          const userFound = state.users.find(
            (user) => user.username === username)

          const likedPost = postsLikedByUser()?.some(
            (post) => post._id === _id
          );

          const bookmarkedPost = postPresentInBookmarks(_id);

          return (
            <div key={_id}>
              <ul className="post-details">
                <li className="post-specs">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="post-update-section"
                    onClick={() => handlePostUpdation(_id)}
                  />

                  {(postUpdate === _id && currentUser.username === username) ? (
                    <div className="post-update-section update-details">
                      <p className="update-options">Edit</p>
                      <hr />
                      <p className="update-options"
                      onClick={() => deletePosts(_id)}
                      >Delete</p>
                    </div>
                  ) : (postUpdate === _id && currentUser.username !== username) ? (
                    <div className="post-update-section update-details">
                      <p className="update-options"
                      onClick={() => unfollowUser(userFound?._id)}
                      >Unfollow</p>
                    </div>
                  ) : ""}

                  <div className="post-creator-details">
                    <Avatar
                      name={fullname}
                      src={userFound?.avatar}
                      round={true}
                      size="50"
                    />

                    <p className="user-name">
                      {fullname}
                      <br />
                      <span>@{username}</span>
                    </p>
                  </div>

                  <p className="post-content">{content}</p>
                  {image && (
                    <img src={image} alt="username" className="content-image" />
                  )}

                  <div className="action-btns">
                    {likedPost ? (
                      <>
                        <p className="like-count">{likeCount}</p>
                        <div>
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="post-action-btns dislike-post"
                            onClick={() => dislikePost(_id)}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="like-count">{likeCount}</p>
                        <div>
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="post-action-btns"
                            onClick={() => likePost(_id)}
                          />
                        </div>
                      </>
                    )}

                    <FontAwesomeIcon
                      icon={faComment}
                      className="post-action-btns"
                    />

                    {bookmarkedPost ? (
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className="post-action-btns remove-bookmark"
                        onClick={() => removeFromBookmarks(_id)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className="post-action-btns"
                        onClick={() => addToBookmarks(_id)}
                      />
                    )}

                    <FontAwesomeIcon
                      icon={faShare}
                      className="post-action-btns"
                    />
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
