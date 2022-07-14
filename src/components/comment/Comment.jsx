import { useEffect, useState } from "react"

export function Comment (props) {

const [comment, setComment] = useState(props.comment);

useEffect(() => {
    setComment(props.comment)
}, [props.comment])

return(
        <div className="comment_cnt">
            {comment.creator.avatar? <img className="user_avatar" src={comment.creator.avatar} alt="creator avatar"/>
            :
            <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>}

            <div className="comment_body">
                <h1 className="user_name">{comment.creator.name} {comment.creator.surname}</h1>
                <div className="comment_txt_box"><h1 className="comment_txt">{comment.comment}</h1></div>                              
            </div>
        </div>
    )
}