import { Link } from "react-router-dom";

export function Create() {
    return(
        <div className="create_pg">

            <div className="form_cnt">
                <div className="form_header">
                    <div className="back_cnt">
                        <Link to="/">                    
                            <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                        </Link>
                    </div>
                    <h1>NEW INSTANT</h1>
                </div>
                <div className="form_body">
                    <div className="preview_cnt">
                        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdiavqt-4NU5TmpRZT52pz7fXVxlCPEeoDAzPA_j1R5BiHYz0fElpYY2xL07NriyZq" alt="preview"/>                                                
                    </div>
                    <div className="inputs">
                        <input name="imageUrl" type="text" placeholder="Image URL"/>
                        <input name="title" type="text" placeholder="Title"/>
                        <textarea  name="description" placeholder="Description.."/>
                        <button type="submit" className="share_btn">SHARE</button>
                        <button className="mainBottom_btn" type="button">CLEAR ALL</button>
                    </div>
                </div>
            </div>

        </div>
    )
}