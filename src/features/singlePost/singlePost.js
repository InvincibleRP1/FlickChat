import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
//
import { TopNavigation } from "../../components/navbar/navbar";
import { PostsPage } from "../../components/posts/posts";
import { SideNav } from "../../components/sidenavbar/sidenav";
import { UserSuggestion } from "../../components/userSuggestion/userSuggestion";
import { SocialDataContext } from "../../contexts/dataContext";
import "../singlePost/singlePost.css";
import { AuthContext } from "../../contexts/authContext";

export const SinglePost = () => {
  const { state, dispatch } = useContext(SocialDataContext);
  const { currentUser } = useContext(AuthContext);

  const [commentFormData, setCommentFormData] = useState({
    text: "",
    username: currentUser?.username,
  });

  const [showCommentUpdate, setShowCommentUpdate] = useState("");

  const [editOption, setEditOption] = useState(false);

  const { postId } = useParams();

  const filteredPost = state?.posts?.filter((post) => post._id === postId);

  const addComment = (commentAddpostId) => {
    console.log(state?.posts);
    const newPosts = state?.posts?.map((post) =>
      post._id === commentAddpostId
        ? {
            ...post,
            comments: [...post?.comments, { ...commentFormData, _id: uuid() }],
          }
        : post
    );

    dispatch({ type: "initialize-posts", posts: newPosts });

    setCommentFormData((formVal) => ({ ...formVal, text: "" }));
  };

  const handleCommentUpdate = (commentId) => {
    setShowCommentUpdate((prevVal) =>
      prevVal === commentId ? null : commentId
    );

    setCommentFormData((formVal) => ({
      ...formVal,
      text: "",
    }));
  };

  const handleCommentEdit = (comment) => {
    setEditOption((prev) => !prev);

    setCommentFormData((formVal) => ({
      ...formVal,
      text: comment?.text,
    }));
  };

  const handleDeleteComment = (comment) => {
    const newPost = state?.posts?.find((post) => post._id === postId);

    const updateComments = newPost.comments.filter(
      (comments) => comments._id !== comment._id
    );

    const updatedPosts = state?.posts.map((post) =>
      post._id === newPost._id ? { ...post, comments: updateComments } : post
    );

    dispatch({ type: "initialize-posts", posts: updatedPosts });

    setEditOption(false);
    setShowCommentUpdate("");
  };

  const saveComment = () => {
    const newPost = state?.posts?.find((post) => post._id === postId);

    const updateComments = newPost.comments.map((comment) =>
      comment._id === showCommentUpdate ? { ...commentFormData } : comment
    );

    const updatedPosts = state?.posts.map((post) =>
      post._id === newPost._id ? { ...post, comments: updateComments } : post
    );

    dispatch({ type: "initialize-posts", posts: updatedPosts });

    setCommentFormData((formval) => ({ ...formval, text: "" }));

    setEditOption(false);
    setShowCommentUpdate("");
  };

  return (
    <div>
      <TopNavigation />
      <SideNav />
      <UserSuggestion />

      <PostsPage postsOnFeed={filteredPost} />

      <div className="comments-section">
        <div className="add-comment">
          <Avatar
            name={currentUser?.fullname}
            src={currentUser?.avatar}
            round={true}
            size="50"
          />
          <input
            type="text"
            className="comment-area"
            placeholder="Write your comment"
            onChange={(e) =>
              setCommentFormData((formVal) => ({
                ...formVal,
                text: e.target.value,
              }))
            }
            value={commentFormData?.text}
          />

          {editOption ? (
            <button className="comment-btn" onClick={saveComment}>
              Save Comment
            </button>
          ) : (
            <button className="comment-btn" onClick={() => addComment(postId)}>
              Add Comment
            </button>
          )}
        </div>

        <div className="comment-details">
          {filteredPost?.map((post) => {
            const { _id, comments } = post;

            return (
              <div className="all-comments" key={_id}>
                {comments?.map((comment) => {
                  const userFound = state.users.find(
                    (user) => user.username === comment.username
                  );

                  return (
                    <div className="user-comment">
                      <Avatar
                        name={userFound?.fullname}
                        src={userFound?.avatar}
                        round={true}
                        size="30"
                      />

                      <span className="comment">
                        <b>
                          {userFound?.firstName
                            .concat(" ")
                            .concat(userFound?.lastName)}
                        </b>
                        <span className="user-name comment-username">
                          @{comment?.username}
                        </span>

                        {currentUser?.username === userFound?.username && (
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            className="update-comment"
                            onClick={() => handleCommentUpdate(comment?._id)}
                          />
                        )}

                        {showCommentUpdate === comment._id && (
                          <div className="comment-changes">
                            {
                              <p onClick={() => handleCommentEdit(comment)}>
                                Edit
                              </p>
                            }
                            <hr />
                            <p onClick={() => handleDeleteComment(comment)}>
                              Delete
                            </p>
                          </div>
                        )}
                        <br />

                        <p>{comment?.text}</p>
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
