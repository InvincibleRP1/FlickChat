import { useContext } from "react";
import { CreatePosts } from "../posts/createPosts"
import { SocialDataContext } from "../../contexts/dataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";


export const AddPostModal = ({showCreatePostModal, setCreatePostModal}) => {

    const { formData, setFormData, handleCreatePosts, state, dispatch } = useContext(SocialDataContext);

    const createPost = () => {
        if (formData.content !== "" || formData?.image?.length > 0) {
          handleCreatePosts(formData);
        }
    
        setFormData({ ...formData, content: "", image: null });
    
        setCreatePostModal(prev => !prev);
      };

    const handleAddModal = () => {

      setCreatePostModal(prev => !prev);

      dispatch({type: "create-modal", value: !state?.createModal});
    }


    return (
        <div className="create-post-modal"
        style={{zIndex: state?.createModal ? "10" : ""}}
        >
          <FontAwesomeIcon icon={faClose} className="post-close-icon"
          onClick={handleAddModal}
          />
          <CreatePosts formData={formData} setFormData={setFormData} createPost={createPost} showCreatePost={true}/>
        </div>
    )
}