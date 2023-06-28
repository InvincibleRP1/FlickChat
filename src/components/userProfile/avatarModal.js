import Avatar from "react-avatar";
import './userProfile.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { SocialDataContext } from "../../contexts/dataContext";

export const AvatarModal = ({showAvatarModal, setShowAvatarModal, user}) => {

    const { dispatch, state } = useContext(SocialDataContext);

    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const avatars = ['https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar.png?updatedAt=1687787334661',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar2.png?updatedAt=1687787335997',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar3.png?updatedAt=1687787334737'
    ,

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar4.png?updatedAt=1687787335238',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar5.png?updatedAt=1687787335811',

    'https://ik.imagekit.io/qsdtqu5hp/FlickChat/Avatars/avatar6.png?updatedAt=1687787335229'
];

const handleAvatarChange = (avatarImg) => {
  const newUsers = state?.users?.map((existingUser) => existingUser._id === user._id ? {...user, avatar: avatarImg} : existingUser);

  const updatedUser = newUsers?.find((existingUser) => existingUser._id === currentUser._id);

  console.log(updatedUser);
  setCurrentUser(updatedUser);

  dispatch({ type: "initialize-users", users: newUsers });

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
