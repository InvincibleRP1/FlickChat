

import "../userFeed/userFeed.css";
import { TopNavigation } from "../../components/navbar/navbar";
import { useContext } from "react";
import { SocialDataContext } from "../../contexts/dataContext";
import { SideNav } from "../../components/sidenavbar/sidenav";
export const UserFeedPage = () => {
  const { state, dispatch } = useContext(SocialDataContext);

  return (
    <>
      <TopNavigation></TopNavigation>
      <div className="user-feed">
        <SideNav/>

        <div className="post-area">
          <h1>Posts</h1>
          {state?.posts.slice(0, 4).map((post) => {
            const {
              _id,
              content,
              image,
              likes: { likeCount, likedBy, dislikedBy },
              fullname,
              username,
              createdAt,
            } = post;
            return (
              <div>
                <ul className="post-details">
                  <li className="post-specs">
                    <p className="user-name">{fullname}
                    <br />
                    <span>@{username}</span>
                    </p>

                    
                    <p className="post-content">{content}</p>
                    {image && (
                      <img
                        src={image}
                        alt="username"
                        className="content-image"
                      />
                    )}

                    <span>{likeCount} 
                    <button className="post-action-btns">Like</button>
                    </span>
                    
                    <button className="post-action-btns">Comment</button>
                    <button className="post-action-btns">Bookmark</button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        <div className="user-list-area">
          <h1>Users</h1>
        </div>
      </div>
    </>
  );
};
