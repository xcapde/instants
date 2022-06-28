import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { instantServices } from "../data_API/instantServices";

export function Details() {

    const [instantInfo, setInstantInfo] = useState({});
    const [id] = useState(useParams().id)

    const showDetails = () => {

        instantServices.getInstantById(id).then(res => {
            setInstantInfo(res);
          });
    } 

    useEffect(() => {
        showDetails();
      },[]);

    return(
        <div className="details_pg">

            <div className="details_cnt">

                <div className="details_photo">
                        <img src={instantInfo.imgUrl} alt="preview"/>                                           
                        <div className="comment_count"><i class="fa-solid fa-message"></i>{instantInfo.comments}</div>   
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
                        
                    <div className="details_body">

                        <div className="details_photo_mobile">
                            <img src={instantInfo.imgUrl} alt="preview"/>  
                            <div className="comment_count"><i class="fa-solid fa-message"></i>{instantInfo.comments}</div>                                              
                            <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                        </div> 
                         
                        <div className="description_box">
                            <div className="user_cnt">
                                <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
                                <h1 className="user_name">{instantInfo.userName}</h1>
                            </div> 
                            <p>{instantInfo.description}</p>
                        </div>
                        <div className="comments_box">
                            <div className="comment_cnt">
                                <div className="user_photo">
                                    <i className="fa-solid fa-circle-user"></i>
                                </div>
                                <div className="comment_body">
                                    <h1 className="user_name">User</h1>
                                    <h1 className="comment_txt">Comment</h1>                                
                                </div>
                            </div>
                        </div>  
                    </div> 

                    <div className="newComment_box">
                        <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
                        <input type="text" className="comment_input" placeholder="New comment..."/>
                        <button className="share_btn">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>

                </div>                
            </div>

        </div>
    )
}