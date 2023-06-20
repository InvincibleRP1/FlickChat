import { useContext } from "react";
import { useState } from "react";
import { SocialDataContext } from "../../contexts/dataContext";

export const EditProfileModal = ({
  formData,
  showModal,
  setShowModal,
  setFormData,
}) => {
  const { editUserProfile } = useContext(SocialDataContext);

  const handleSavingEditedData = () => {
    editUserProfile(formData);
    setShowModal((prevVal) => !prevVal);
  };

  return (
    <div>
      {showModal && (
        <div className="edit-form-modal">
          <div className="names">
            <label htmlFor="" className="name-inputs">
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

            <label htmlFor="" className="name-inputs">
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

          <label htmlFor="" className="bio">
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
            <label htmlFor="">Link</label>
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
            <button onClick={handleSavingEditedData}
            className="action-btn"
            >Save</button>
            <br />

            <button onClick={() => setShowModal((prevVal) => !prevVal)} className="action-btn close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
