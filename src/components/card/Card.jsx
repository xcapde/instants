import { Link } from "react-router-dom"

export function Card(){
    return (
        <div className="card_cnt">
            <div className="card_img">
                <Link to="details">                            
                    <img src="" alt=""/>
                </Link>
            </div>
            <div className="card_info">
                <div className="card_btns">
                    <div className="reaction_btns">
                        <button className="like_btn"><i class="fa-solid fa-heart"></i></button>
                        <button className="fav_btn"><i className="fa-solid fa-star"></i></button>
                    </div>
                    <div className="gestion_btns">
                        {/* <button className="detail_btn"><i className="fa-solid fa-info"></i></button> */}
                        <button className="edit_btn"><i className="fa-solid fa-pencil"></i></button>
                        <button className="delete_btn"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
                <div className="card_txt">
                    <h1>Title...</h1>
                    <h2>User</h2>
                </div>
            </div>
        </div>
    )
}



