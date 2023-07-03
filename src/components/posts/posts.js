import { useContext, useState} from "react";

import { useLocation, useNavigate } from "react-router-dom";

//

import "../posts/posts.css";
import { SocialDataContext } from "../../contexts/dataContext";
import { AuthContext } from "../../contexts/authContext";
import { CreatePosts } from "./createPosts";
import { SortPosts } from "../sort-posts/sortPosts";
import { BookmarkContext } from "../../contexts/bookmarksContext";
import { PostModal } from "../postModal/postModal";
import { Loader } from "../loader/loader";

import { PostDetails } from "./postDetails";

export const PostsPage = ({ postsOnFeed }) => {
  const { handleCreatePosts, deletePosts, getSingleUser, state } =
    useContext(SocialDataContext);

  const { currentUser } = useContext(AuthContext);

  const { formData, setFormData, editFormData, setEditFormData } =
    useContext(SocialDataContext);

  const [postUpdate, setPostUpdate] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPostId, setCurrentPostId] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const createPost = () => {
    if (formData.content !== "" || formData?.image?.length > 0) {
      handleCreatePosts(formData);
    }

    setFormData({ ...formData, content: "", image: null });

  };

  const checkIndividualUser = (userId) => {
    getSingleUser(userId);
    navigate(`/profile/${userId}`);
  };

  const { handleLikes, handleDislikes, postsLikedByUser, handleUnfollowUser, handleFollowUser, isLoading } =
    useContext(SocialDataContext);

  const { addToBookmarks, postPresentInBookmarks, removeFromBookmarks } =
    useContext(BookmarkContext);

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
    setPostUpdate("");
  };

  const followUser = (userId) => {
    console.log(userId);
    handleFollowUser(userId);
    setPostUpdate("");
  };

  // Edit Post

  const handleEditPost = (post) => {
    setShowEditModal((prev) => !prev);
    setCurrentPostId(post._id);

    setEditFormData((formVal) => ({
      ...formVal,
      content: post?.content,
      image: post?.image,
    }));
    setPostUpdate("");
  };

  //Show Single Post

  const showSinglePost = (postId) => {
    navigate(`/post/${postId}`);
  }

  return (
    <>
      <div className="post-area">
        <CreatePosts
          formData={formData}
          setFormData={setFormData}
          createPost={createPost}
          showCreatePost={location?.pathname === "/" ? true : false}
        />

        <div
          style={{
            display:
              location.pathname === "/" || location.pathname === "/explore"
                ? ""
                : "none",
          }}
        >
          <SortPosts />
          {state?.sortValue && (
            <p className="sort-post-denote">Showing {state?.sortValue} posts</p>
          )}
        </div>

        <PostModal
          showPostModal={showEditModal}
          setShowPostModal={setShowEditModal}
          postId={currentPostId}
        />

        {isLoading && <Loader />}

        {postsOnFeed?.length === 0 && <p className="no-bookmarks-title">
          Follow users to see posts on feed
          </p>}
        
        {!isLoading && postsOnFeed.map((post) => {
          const {
            _id,
            content,
            image,
            likes: { likeCount, likedBy, dislikedBy },
            fullname,
            username,
            createdAt,
            comments,
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
              <PostDetails 
              handleEditPost={handleEditPost}
              handlePostUpdation={handlePostUpdation}
              post={post}
              currentUser={currentUser}
              postUpdate={postUpdate}
              deletePosts={deletePosts}
              unfollowUser={unfollowUser}
              followUser={followUser}
              userFound={userFound}
              checkIndividualUser={checkIndividualUser}
              likePost={likePost}
              dislikePost={dislikePost}
              removeFromBookmarks={removeFromBookmarks}
              addToBookmarks={addToBookmarks}
              showSinglePost={showSinglePost}
              bookmarkedPost={bookmarkedPost}
              likedPost={likedPost}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
