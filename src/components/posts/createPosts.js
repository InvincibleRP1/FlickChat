import { useContext, useState } from "react";
import Avatar from "react-avatar";

import '../posts/posts.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faImage,
  faFaceSmile
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/authContext";

export const CreatePosts = ({formData, getFormValue, createPost, showCreatePost}) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {showCreatePost && <div>
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
          <FontAwesomeIcon icon={faImage} className="post-info" />
          <FontAwesomeIcon icon={faFaceSmile} className="post-info" />

          <button className="post-create-btn" onClick={createPost}>
            Post
          </button>
        </div>

        <hr />

        
      </div>}
    </div>
  );
};
