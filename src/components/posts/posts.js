import { useContext } from "react"
import { SocialDataContext } from "../../contexts/dataContext"

import '../posts/posts.css';

export const PostsPage = ({postsOnFeed}) => {

    // const { state, dispatch } = useContext(SocialDataContext);

    return (
        <>
        <div className="post-area">
          <h1>Posts</h1>
          {postsOnFeed.map((post) => {
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
        </>
    )
}