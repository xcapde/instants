export function Comment () {

    const getAllComments= ()=>{

    }

return(
        <div className="comment_cnt">
            <div className="user_photo">
                <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className="comment_body">
                <h1 className="user_name">User</h1>
                <div className="comment_txt_box">
                    <h1 className="comment_txt">Comment</h1>
                    {/* <h1 className="comment_date">date</h1>  */}
                </div>                              
            </div>
        </div>
    )
}