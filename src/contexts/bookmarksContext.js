import { useContext } from "react";
import { createContext } from "react";
import { AuthContext } from "./authContext";

import { toast } from "react-toastify";

export const BookmarkContext = createContext();

export const BookmarkHandler = ({children}) => {

    const { token, currentUser, setCurrentUser } = useContext(AuthContext);

    const addToBookmarks = async (postId) => {
        try {
          if (token) {
            const response = await fetch(`/api/users/bookmark/${postId}`, {
              method: "POST",
              headers: {
                authorization: token,
              },
            });
    
            const { bookmarks } = await response.json();
    
            setCurrentUser({ ...currentUser, bookmarks });
            toast.success("Added to bookmarks")
          }
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const postPresentInBookmarks = (postId) => {
        const bookmarkedPost = currentUser?.bookmarks.some((id) => id === postId);
    
        return bookmarkedPost;
      };
    
      const removeFromBookmarks = async (postId) => {
        try {
          if (token) {
            const response = await fetch(`/api/users/remove-bookmark/${postId}`, {
              method: "POST",
              headers: {
                authorization: token,
              },
            });
    
            const { bookmarks } = await response.json();
    
            setCurrentUser({ ...currentUser, bookmarks });
            toast.info("Removed from bookmarks")
          }
        } catch (error) {
          console.log(error.message);
        }
      };
    

    return (
        <BookmarkContext.Provider
        value={{
            postPresentInBookmarks,
            removeFromBookmarks,
            addToBookmarks
        }}
        >
            {children}
        </BookmarkContext.Provider>
    )
}