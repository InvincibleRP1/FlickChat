import '../posts/posts.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFire,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { SocialDataContext } from '../../contexts/dataContext';

export const SortPosts = () => {

    const { dispatch } = useContext(SocialDataContext);

    const handleSortValue = (sortValue) => {
        dispatch({ type: "post-sort-method", value: sortValue });
      };

    return (
        <>
        <div className="sort-posts-area">
          <div
            onClick={() => handleSortValue("trending")}
            className="sort-action-btn"
          >
            <FontAwesomeIcon icon={faFire} />
            <span>Trending</span>
          </div>

          <div
            onClick={() => handleSortValue("latest")}
            className="sort-action-btn"
          >
            <FontAwesomeIcon icon={faRefresh} />
            <span>Latest</span>
          </div>
        </div>
        </>
    )
};
