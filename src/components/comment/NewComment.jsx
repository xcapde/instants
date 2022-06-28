export function NewComment () {

    return(
        <div className="newComment_box">
            <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
            <input type="text" className="comment_input" placeholder="New comment..."/>
            <button className="share_btn">
                <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
        )
    }