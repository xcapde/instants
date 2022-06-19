import { Link } from "react-router-dom";

export function Details() {
    return(
        <div className="details_pg">

            <div className="details_cnt">

                <div className="details_photo">
                        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdiavqt-4NU5TmpRZT52pz7fXVxlCPEeoDAzPA_j1R5BiHYz0fElpYY2xL07NriyZq" alt="preview"/>                                                
                        {/* <div className="like_count">999 likes</div> */}
                </div>

                <div className="details_info">

                    <div className="form_header">
                        <div className="back_cnt">
                            <Link to="/">                    
                                <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                            </Link>
                        </div>
                        <h1>Title</h1>
                    </div>

                    <div className="details_photo_mobile">
                        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdiavqt-4NU5TmpRZT52pz7fXVxlCPEeoDAzPA_j1R5BiHYz0fElpYY2xL07NriyZq" alt="preview"/>                                                
                    </div>

                    <div className="details_body">
                        <p>Description</p>  
                    </div> 

                    <div className="reaction_btns">
                        <button className="like_btn"><i className="fa-solid fa-heart"></i></button>
                        <button className="fav_btn"><i className="fa-solid fa-star"></i></button>
                    </div>          

                </div>                
            </div>

        </div>
    )
}