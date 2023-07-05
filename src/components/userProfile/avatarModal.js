import Avatar from "react-avatar";
import './userProfile.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";

export const AvatarModal = ({showAvatarModal, setShowAvatarModal, user}) => {

    const { editUserProfile, formData } = useContext(SocialDataContext);


    const avatars = ['https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/46356734.jpg?updatedAt=1688543380993',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/46356735.jpg?updatedAt=1688543877251',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar3.png?updatedAt=1687787334737'
    ,

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/46356768.jpg?updatedAt=1688543771981',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/21372076.jpg?updatedAt=1688543267724',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar6.png?updatedAt=1687787335229'
];

const handleAvatarChange = (avatarImg) => {

  editUserProfile({...formData, avatar: avatarImg });

  setShowAvatarModal(prev => !prev);
}
  return (
    <div className="avatar-modal">
         
      <div className="edit-form-modal">
      <FontAwesomeIcon icon={faClose} className="close-icon"
      onClick={() => setShowAvatarModal(prev => !prev)}
      />
        <ul className="avatar-list">
        
        {avatars?.map((avatar) => (
            <li className="avatar-item"
            onClick={() => handleAvatarChange(avatar)}
            >
            <Avatar 
            round={true}
            src={avatar}
            name={user?.firstName}
            size="120"
            />
                
            </li>
        ))}
        </ul>
       
      </div>
    </div>
  );
};
