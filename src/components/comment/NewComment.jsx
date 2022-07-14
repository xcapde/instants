import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { commentServicesIJ } from "../../data_API/commentServicesIJ";

export function NewComment (props) {
    const [newComment, setNewComment] = useState('');
    const navigate = useNavigate();


    const onInputChange=(e)=>{
        const value = e.target.value;
        setNewComment(value);
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        createComment(newComment);
        setNewComment('');
    }

    const createComment=(newComment)=>{

        commentServicesIJ.postComment(newComment).then(res => {
            // if(res)navigate(-0);
            alert(`${res.newComment} added!`)
            console.log('added')
       });

       console.log('create')

    }


    return(
        <form onSubmit={onHandleSubmit} className="newComment_box">
            <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
            <input onChange={onInputChange} value={newComment || ''} type="text" className="comment_input" placeholder="New comment..."/>
            <div className="commentBox_btns">
                <button type="button" className="commentBox_btn close">
                    <i onClick={()=>props.showCommentInput()} className="fa-solid fa-xmark"></i> 
                </button>
                <button type="submit" className="commentBox_btn share">
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </form>
        )
    }