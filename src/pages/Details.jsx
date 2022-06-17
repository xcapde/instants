import { Link } from "react-router-dom";

export function Details() {
    return(
        <div className="details_pg">

            <div className="details_cnt">
                <div className="details_photo">
                        {/* <image src="" alt="preview"/> */}
                        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdiavqt-4NU5TmpRZT52pz7fXVxlCPEeoDAzPA_j1R5BiHYz0fElpYY2xL07NriyZq" alt="preview"/>                                                
                </div>

                <div className="details_info">

                    <div className="details_header">
                        <div className="back_cnt">
                            <Link to="/">                    
                                <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                            </Link>
                        </div>
                        <h1>Title</h1>
                    </div>

                    <div className="details_body">

                        <p>Description</p>

                    </div>

                </div>
                
            </div>

        </div>
    )
}