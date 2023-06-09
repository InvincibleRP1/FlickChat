import { useContext, useState } from "react";
import Avatar from "react-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFaceSmile,
  faClose,
} from "@fortawesome/free-solid-svg-icons";


import { SocialDataContext } from "../../contexts/dataContext";
import "../postModal/postModal.css";

import { AuthContext } from "../../contexts/authContext";
import EmojiPicker from "emoji-picker-react";

export const PostModal = ({ showPostModal, setShowPostModal, postId }) => {
  const { editPost, editFormData, setEditFormData } =
    useContext(SocialDataContext);

  const [imageSelected, setImageSelected] = useState(false);

  const [emojiSelected, setEmojiSelected] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handlePostEditUpdate = () => {
    editPost(postId, editFormData);
    setShowPostModal((prev) => !prev);
    setEmojiSelected(false)
  };

  const handleImageEdit = (e) => {
    setEditFormData({
      ...editFormData,
      image: URL.createObjectURL(e.target.files[0]),
    });

    setImageSelected(true);
  };

  return (
    <div>
      {showPostModal && (
        <div className="post-form-modal">
          <FontAwesomeIcon
            icon={faClose}
            className="close-edit-tab"
            onClick={() => setShowPostModal((prev) => !prev)}
          />
          <div className="create-post-section">
            <Avatar
              round={true}
              src={currentUser?.avatar}
              name={currentUser?.firstName
                .concat(" ")
                .concat(currentUser?.lastName)}
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
              onChange={(e) =>
                setEditFormData({ ...editFormData, content: e.target.value })
              }
              value={editFormData?.content}
            />
          </div>

          <div className="create-post-area">
            <label for="file-edit-upload">
              <FontAwesomeIcon icon={faImage} className="post-info" />
            </label>

            <input
              type="file"
              name="image"
              id="file-edit-upload"
              onChange={handleImageEdit}
            />

            <FontAwesomeIcon
              icon={faFaceSmile}
              className="post-info"
              onClick={() => setEmojiSelected((prevVal) => !prevVal)}
            />

            {emojiSelected && <div className="emoji-section">
              <EmojiPicker
                onEmojiClick={({ emoji }) =>
                  setEditFormData((formVal) => ({
                    ...formVal,
                    content: formVal?.content.concat(emoji),
                  }))
                }
              />
            </div>}

            <button className="post-create-btn" onClick={handlePostEditUpdate}>
              Update
            </button>
          </div>

          <div>
            <img
              src={editFormData?.image}
              alt=""
              className="image-upload-display"
            />

            {editFormData?.image && (
              <FontAwesomeIcon
                className="close-btn image-close"
                icon={faClose}
                onClick={() =>
                  setEditFormData((formVal) => ({ ...formVal, image: null }))
                }
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
