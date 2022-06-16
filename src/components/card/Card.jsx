import { Link } from "react-router-dom"

export function Card(){

    return (
        <div className="card_cnt">
            <div className="card_txt">
                <div className="card_user">
                    <div className="profile_photo">
                    </div>
                    <h2>User</h2>                        
                </div>
                <h1>Title..</h1>
            </div>

            <div className="card_img">
                <Link to="/details">                            
                    <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdiavqt-4NU5TmpRZT52pz7fXVxlCPEeoDAzPA_j1R5BiHYz0fElpYY2xL07NriyZq" alt=""/>
                    {/* <img src="" alt=""/> */}
                </Link>
            </div>

                <div className="card_btns">                    
                    <div className="reaction_btns">
                        <button className="like_btn"><i className="fa-solid fa-heart"></i></button>
                        <button className="fav_btn"><i className="fa-solid fa-star"></i></button>
                    </div>
                    <div className="gestion_btns">
                        <button className="edit_btn"><i className="fa-solid fa-pencil"></i></button>
                        <button className="delete_btn"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
        </div>
    )
}



