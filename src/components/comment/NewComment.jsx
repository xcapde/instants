import { useState } from "react";
import { commentServicesIJ } from "../../data_API/commentServicesIJ";

export function NewComment (props) {
    const [newComment, setNewComment] = useState('');
    const [instantId] = useState(props.id);
    const [error, setError] = useState(false);


    const onInputChange=(e)=>{
        const value = e.target.value;
        setNewComment(value);
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();

        if(!newComment){
            setError(true);
            return
        }
        
        createComment(newComment, instantId);
        setNewComment('');
        
        if(props.commentIsActive){
            props.getAllData();
        }
    }

    const createComment=(newComment, instantId)=>{

        commentServicesIJ.postComment(newComment, instantId).then(res => {
            console.log(newComment, instantId, res)
            if(res);
            alert(`Comment added!`)
       });

    }

    return(
        <form onSubmit={onHandleSubmit} className="newComment_box">
            <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
            <input onChange={onInputChange} value={newComment || ''} type="text" className={error?"comment_input inputError" : "comment_input"} placeholder="Write a comment..." autoFocus />
            <div className="commentBox_btns">
                {!newComment?
                <button type="button" className="commentBox_btn close">
                    <i onClick={()=>props.showCommentInput()} className="fa-solid fa-xmark"></i>
                </button>
                : ''}
                <button type="submit" className={!newComment?"commentBox_btn share" : "commentBox_btn share readyToShare"}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </form>
        )
    }