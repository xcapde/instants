import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { instantServices } from "../data_API/instantServices";

export function Details() {

    const [instantInfo, setInstantInfo] = useState({});
    const [id, setId] = useState(useParams().id)

    useEffect(() => {
        showDetails();
      },[]);

    const showDetails = () => {

        instantServices.getInstantById(id).then(res => {
            setInstantInfo(res);
          });
    } 

    return(
        <div className="details_pg">

            <div className="details_cnt">

                <div className="details_photo">
                        <img src={instantInfo.imgUrl} alt="preview"/>                                                
                        <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                </div>

                <div className="details_info">

                    <div className="form_header">
                        <div className="back_cnt">
                            <Link to="/">                    
                                <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                            </Link>
                        </div>
                        <h1>{instantInfo.title}</h1>
                    </div>

                    <div className="details_photo_mobile">
                        <img src={instantInfo.imgUrl} alt="preview"/>                                                
                        <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                    </div>

                    <div className="details_body">
                        <p>{instantInfo.description}</p>  
                    </div> 

                    <div className="reaction_btns">
                        <button className={instantInfo.isLike?"like_btn .liked":"like_btn"}><i className="fa-solid fa-heart"></i></button>
                        <button className={instantInfo.isFav?"fav_btn .favorited":"fav_btn"}><i className="fa-solid fa-star"></i></button>
                    </div>          

                </div>                
            </div>

        </div>
    )
}