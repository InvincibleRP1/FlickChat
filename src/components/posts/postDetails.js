import Avatar from "react-avatar";

import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faBookmark,
  faShare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export const PostDetails = ({
    handlePostUpdation, 
    handleEditPost, 
    postUpdate, 
    currentUser,
    post, 
    deletePosts, 
    unfollowUser,
    followUser,
    userFound,
    checkIndividualUser,
    likePost,
    dislikePost,
    removeFromBookmarks,
    addToBookmarks,
    showSinglePost,
    bookmarkedPost,
    likedPost,
}) => {

    const {
        _id,
        content,
        image,
        likes: { likeCount },
        fullname,
        username,
        createdAt,
        comments,
      } = post;

      const date = new Date(createdAt);
      const [month, day, year, hour, minutes] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
      ];

    return (
        <div>
              <ul className="post-details">
                <li className="post-specs">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="post-update-section"
                    onClick={() => handlePostUpdation(_id)}
                  />

                  {postUpdate === _id && currentUser.username === username ? (
                    <div className="post-update-section update-details">
                      <p
                        className="update-options"
                        onClick={() => handleEditPost(post)}
                      >
                        Edit
                      </p>
                      <hr />
                      <p
                        className="update-options"
                        onClick={() => deletePosts(_id)}
                      >
                        Delete
                      </p>
                    </div>
                  ) : postUpdate === _id &&
                    currentUser.username !== username && currentUser?.following.some(
                      (followedUser) => followedUser.username === username
                    ) ? (
                    <div className="post-update-section update-details">
                      <p
                        className="update-options"
                        onClick={() => unfollowUser(userFound?._id)}
                      >
                        Unfollow
                      </p>
                    </div>
                  ) : (
                    postUpdate === _id &&
                    currentUser.username !== username &&!currentUser?.following.some(
                      (followedUser) => followedUser.username === username
                    ) ? (
                    <div className="post-update-section update-details">
                      <p
                        className="update-options"
                        onClick={() => followUser(userFound?._id)}
                      >
                        Follow
                      </p>
                    </div>
                  ) : ""
                  )}

                  <div
                    className="post-creator-details"
                    onClick={() => checkIndividualUser(userFound._id)}
                  >
                    <Avatar
                      name={fullname}
                      src={userFound?.avatar}
                      round={true}
                      size="50"
                    />

                    <p className="user-name">
                      {userFound?.firstName
                        .concat(" ")
                        .concat(userFound?.lastName)}
                      <br />
                      <span>@{username}</span>
                    </p>
                  </div>

                  <p id="post-time">{`${day}/${
                    +month + 1
                  }/${year} ${hour}:${minutes}`}</p>

                  <p className="post-content"
                  onClick={() => showSinglePost(_id)}
                  >{content}</p>
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

                    <p className="like-count">{comments?.length ?? 0}</p>
                    <div>
                      <FontAwesomeIcon
                        icon={faComment}
                        className="post-action-btns"
                        onClick={() => showSinglePost(_id)}
                      />
                    </div>

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
                      onClick={() => toast.success("Copied Link")}
                      className="post-action-btns"
                    />
                  </div>
                </li>
              </ul>
              </div>
    )
}