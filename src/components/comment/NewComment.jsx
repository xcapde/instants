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
    }

    const createComment=(data)=>{

        commentServicesIJ.postComment(data).then(res => {
            if(res)navigate(-0);
            alert(`${res.comment} added!`)
       });

       console.log('create')

    }

    const getDate = () => {

        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        let date = `${day}/${month}/${year}`;
        console.log(date)

        console.log('date')
    }

    return(
        <form onSubmit={onHandleSubmit} className="newComment_box">
            <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
            <input onChange={onInputChange} type="text" className="comment_input" placeholder="New comment..."/>
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