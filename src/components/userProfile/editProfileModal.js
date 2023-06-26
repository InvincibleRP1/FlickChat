import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import { useState } from "react";
import { AvatarModal } from "./avatarModal";
import Avatar from "react-avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose, faImage } from "@fortawesome/free-solid-svg-icons";

export const EditProfileModal = ({
  formData,
  showModal,
  setShowModal,
  setFormData,
  user,
}) => {
  const { editUserProfile } = useContext(SocialDataContext);

  const [showAvatarModal, setAvatarModal] = useState(false);

  const [profilePicSelected, setProfilePic] = useState("");

  const handleSavingEditedData = () => {
    
    if(profilePicSelected)
    {
      editUserProfile({...formData, avatar: profilePicSelected });
    }
    else {
      editUserProfile(formData);
    }
    setShowModal((prevVal) => !prevVal);
  };

  const handleAvatarModal = () => {
    setShowModal((prevVal) => !prevVal);
    setAvatarModal((prev) => !prev);
  };

  const handleProfilePictureUpload = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      {showAvatarModal && (
        <AvatarModal
          showAvatarModal={showAvatarModal}
          setShowAvatarModal={setAvatarModal}
          user={user}
        />
      )}

      {showModal && (
        <div className="edit-form-modal">

          <FontAwesomeIcon icon={faClose} className="close-edit-field"
          onClick={() => setShowModal((prevVal) => !prevVal)}
          />

          <div className="profile-picture-section">
            <Avatar
              round={true}
              src={profilePicSelected ? profilePicSelected : user?.avatar}
              name={user?.firstName}
              size="120"
              className="edit-profile-pic"
            />

            <label for="profile-image">
            <FontAwesomeIcon icon={faImage} className="profile-action-icon"
            />
            </label>
            
            <input
              type="file"
              name="image"
              id="profile-image"
              onChange={handleProfilePictureUpload}
              value={""}
            />
           
            <button className="action-btn" onClick={handleAvatarModal}>
              Change Avatar
            </button>
          </div>
          <div className="names">
            <label className="name-inputs">
              First Name
              <input
                type="text"
                value={formData.firstName}
                placeholder="Enter Firstname"
                onChange={(e) =>
                  setFormData((formVal) => ({
                    ...formVal,
                    firstName: e.target.value,
                  }))
                }
              />
            </label>
            <label className="name-inputs">
              Lastname
              <input
                type="text"
                value={formData.lastName}
                placeholder="Enter Lastname"
                onChange={(e) =>
                  setFormData((formVal) => ({
                    ...formVal,
                    lastName: e.target.value,
                  }))
                }
              />
            </label>
          </div>

          <label className="bio">
            Bio
            <textarea
              id=""
              cols="30"
              rows="10"
              value={formData.bio}
              placeholder="Enter Bio"
              onChange={(e) =>
                setFormData((formVal) => ({ ...formVal, bio: e.target.value }))
              }
            />
          </label>

          <br />

          <div className="user-links">
            <label>Link</label>
            <input
              type="text"
              value={formData.link}
              placeholder="Enter Link"
              onChange={(e) =>
                setFormData((formVal) => ({ ...formVal, link: e.target.value }))
              }
            />
          </div>

          <div className="form-action-btns">
            <button onClick={handleSavingEditedData} className="action-btn">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
