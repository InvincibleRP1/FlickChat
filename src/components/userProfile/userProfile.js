import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import { PostsPage} from '../posts/posts';

import Avatar from "react-avatar";

import '../userProfile/userProfile.css';
import { SocialDataContext } from "../../contexts/dataContext";

export const UserProfile = ({ user }) => {

    const { currentUser } = useContext(AuthContext);

    const { state, getIndividualPosts } = useContext(SocialDataContext);

    getIndividualPosts(user?.username);

    const sortedUserPosts = [...state?.userPosts].sort((a, b) => b.createdAt - a.createdAt).reverse();

    return (
        <div>
            <div className="profile-area">
            <Avatar
                    round={true}
                    src={user?.avatar}
                    name={user?.firstName}
                    size="120"
                  />

                <div className="profile-info">
                    <p>{user?.firstName} {user?.lastName}</p>

                    <p
                    className="username"
                    >@{user?.username}</p>
                </div>

                {
                currentUser?.username === user.username &&    
                <button
                className="profile-action-btn"
                >Edit Profile</button>}

                <p>
                    {user?.bio}
                </p>

                <a href={user?.link}
                target="_blank"
                className="user-link"
                >{user?.link}</a>
                <br />            

                <div className="social-details">
                    <div className="user-socials">
                    <p>{user?.followers?.length}
                    </p>
                    <p>Followers</p>
                    </div>
                    
                    <div className="user-socials">
                    <p>{state?.userPosts?.length}</p>
                    <p>Posts</p>
                    </div>
                    
                   
                    <div className="user-socials">
                    <p>{user?.following?.length}</p>
                    <p>Following</p>
                    </div>
                    
                </div>

                <div className="user-post-area">
                    {sortedUserPosts.length > 0 && <p>Your Posts</p>}
                    <PostsPage postsOnFeed={sortedUserPosts}/>
                </div>
            </div>
        </div>
    )
}