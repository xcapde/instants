export function NewComment (props) {

    // const getDate = () => {

    //     let now = Date();
    //     console.log(now)

    // }

    return(
        <form className="newComment_box">
            <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
            <input type="text" className="comment_input" placeholder="New comment..."/>
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