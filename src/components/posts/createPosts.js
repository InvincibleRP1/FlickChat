import { useContext, useState } from "react";
import Avatar from "react-avatar";

import "../posts/posts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faImage, faFaceSmile, faClose } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/authContext";
import { SocialDataContext } from "../../contexts/dataContext";

import EmojiPicker from "emoji-picker-react";

export const CreatePosts = ({
  formData,
  setFormData,
  createPost,
  showCreatePost
}) => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(SocialDataContext);

  const [imageSelected, setImageSelected] = useState(false);

  const [emojiSelected, setEmojiSelected] = useState(false);

  const handleCreatePost = () => {
    createPost();
    setImageSelected(false);
    setEmojiSelected(false);
    dispatch({ type: "post-sort-method", value: "latest" });
  }

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      image: URL.createObjectURL(e.target.files[0]),
    });

    setImageSelected(true);
  };

  const handleImageClose = () => {
    setFormData({
      ...formData,
      image: null
    });

    setImageSelected(false);
  }

  return (
    <div>
      {showCreatePost && (
        <div>
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
                setFormData({ ...formData, content: e.target.value })
              }
              value={formData?.content}
            />
          </div>

          <div className="create-post-area">
            <label for="file-input">
              <FontAwesomeIcon icon={faImage} className="post-info" />
            </label>

            <input
              type="file"
              name="image"
              id="file-input"
              onChange={handleImageUpload}
              value={""}
            />

            <FontAwesomeIcon icon={faFaceSmile} className="post-info" 
            onClick={() => setEmojiSelected(prevVal => !prevVal)}
            />

            {emojiSelected && 
            <div className="emoji-section">
              <EmojiPicker onEmojiClick={({emoji}) =>  setFormData((formVal) => ({...formVal, content: formVal?.content.concat(emoji)}))}/>
            </div>
            }

            <button className="post-create-btn" onClick={handleCreatePost}>
              Post
            </button>
            
          
          </div>

          <div style={{ display: imageSelected ? "" : "none" }}>
            <img
              src={imageSelected ? formData?.image : ""}
              alt=""
              className="image-upload-display"
            />

            <FontAwesomeIcon
              className="close-btn image-close"
              onClick={handleImageClose}
              icon={faClose}
            />
          </div>

          <hr />
        </div>
      )}
    </div>
  );
};
