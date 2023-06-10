import { useContext, useState } from "react";
import { SocialDataContext } from "../../contexts/dataContext";

import "../posts/posts.css";

export const PostsPage = ({ postsOnFeed }) => {
  // const { state, dispatch } = useContext(SocialDataContext);

  // const [isLiked, setIsLiked] = useState(false);

  const {
    handleLikes,
    handleDislikes,
    postsLikedByUser,
    addToBookmarks,
    postPresentInBookmarks,
    removeFromBookmarks
  } = useContext(SocialDataContext);

  const likePost = (postId) => {
    handleLikes(postId);
  };

  const dislikePost = (postId) => {
    handleDislikes(postId);
  };

  return (
    <>
      <div className="post-area">
        <h1>Posts</h1>
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

          const likedPost = postsLikedByUser()?.some(
            (post) => post._id === _id
          );

          const bookmarkedPost = postPresentInBookmarks(_id);

          return (
            <div key={_id}>
              <ul className="post-details">
                <li className="post-specs">
                  <p className="user-name">
                    {fullname}
                    <br />
                    <span>@{username}</span>
                  </p>

                  <p className="post-content">{content}</p>
                  {image && (
                    <img src={image} alt="username" className="content-image" />
                  )}

                  {likedPost ? (
                    <span>
                      {likeCount}
                      <button
                        className="post-action-btns"
                        onClick={() => dislikePost(_id)}
                      >
                        Dislike
                      </button>
                    </span>
                  ) : (
                    <span>
                      {likeCount}
                      <button
                        className="post-action-btns"
                        onClick={() => likePost(_id)}
                      >
                        Like
                      </button>
                    </span>
                  )}

                  <button className="post-action-btns">Comment</button>

                  {bookmarkedPost ? (
                    <button
                      className="post-action-btns"
                      onClick={() => removeFromBookmarks(_id)}
                    >
                      Unbookmark
                    </button>
                  ) : (
                    <button
                      className="post-action-btns"
                      onClick={() => addToBookmarks(_id)}
                    >
                      Bookmark
                    </button>
                  )}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
