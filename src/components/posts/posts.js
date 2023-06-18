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
} from "@fortawesome/free-solid-svg-icons";

import "../posts/posts.css";
import { AuthContext } from "../../contexts/authContext";
import { CreatePosts } from "./createPosts";
import { useLocation } from "react-router-dom";
import { SortPosts } from "../sort-posts/sortPosts";

export const PostsPage = ({ postsOnFeed }) => {
  const { handleCreatePosts, deletePosts, dispatch, state } =
    useContext(SocialDataContext);

  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState("");

  const [postUpdate, setPostUpdate] = useState("");

  const location = useLocation();

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
    handleUnfollowUser,
  } = useContext(SocialDataContext);

  const likePost = (postId) => {
    handleLikes(postId);
  };

  const dislikePost = (postId) => {
    handleDislikes(postId);
  };

  // Post-Update

  const handlePostUpdation = (postId) => {
    setPostUpdate((prevVal) => (prevVal === postId ? null : postId));
  };

  const unfollowUser = (userId) => {
    console.log(userId);
    handleUnfollowUser(userId);
  };

  return (
    <>
      <div className="post-area">
        <CreatePosts
          formData={formData}
          getFormValue={getFormValue}
          createPost={createPost}
          showCreatePost={location?.pathname === "/" ? true : false}
        />

        <div>
        <SortPosts />
        {state?.sortValue && <p
        className="sort-post-denote"
        >Showing {state?.sortValue} posts</p>}
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
            (user) => user.username === username
          );

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

                  {postUpdate === _id && currentUser.username === username ? (
                    <div className="post-update-section update-details">
                      <p className="update-options">Edit</p>
                      <hr />
                      <p
                        className="update-options"
                        onClick={() => deletePosts(_id)}
                      >
                        Delete
                      </p>
                    </div>
                  ) : postUpdate === _id &&
                    currentUser.username !== username ? (
                    <div className="post-update-section update-details">
                      <p
                        className="update-options"
                        onClick={() => unfollowUser(userFound?._id)}
                      >
                        Unfollow
                      </p>
                    </div>
                  ) : (
                    ""
                  )}

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
