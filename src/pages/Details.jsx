import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "../components/comment/Comment";
import { NewComment } from "../components/comment/NewComment";
import { Navbar } from "../components/navbar/Navbar";
// import { instantServices } from "../data_API/instantServices";
import { instantServicesIJ } from "../data_API/instantServicesIJ";

export function Details() {

    const [instantInfo, setInstantInfo] = useState({});
    const [id] = useState(useParams().id)
    const navigate = useNavigate();



    useEffect(() => {

        const showDetails = () => {

            instantServicesIJ.getInstantById(id).then(res => {
                setInstantInfo(res);
              });
        }

        showDetails();
        
    },[id]);

 

    return(
        <div className="details_pg">
            <Navbar/>

            <div className="details_cnt">

                <div className="details_photo">
                        <img src={instantInfo.imgUrl} alt="preview"/>                                           
                        <div className="comment_count"><i className="fa-solid fa-message"></i>{instantInfo.comments}</div>   
                        <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                        <div className="ubication"><i className="fa-solid fa-location-dot"></i>Location</div>
                </div>                

                <div className="details_info">    

                    <div className="form_header">
                        <div className="back_cnt">
                            <button onClick={() => navigate(-1)} className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                        </div>
                        <h1>{instantInfo.title}</h1>
                    </div>      
                        
                    <div className="details_body">

                        <div className="photoAndDescription_mbl_box">
                            <div className="details_photo_mobile">
                                <img src={instantInfo.imgUrl} alt="preview"/>  
                                <div className="comment_count"><i className="fa-solid fa-message"></i>{instantInfo.comments}</div>                                              
                                <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                                <div className="ubication"><i className="fa-solid fa-location-dot"></i>Location</div>
                            </div>                          
                            <div className="description_box">
                                <div className="user_cnt">
                                    <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
                                    <h1 className="user_name">{instantInfo.userName}</h1>
                                </div> 
                                <p>{instantInfo.description}</p>
                            </div>
                        </div>

                        <div className="comments_box">
                            <div className="users_comments">
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                        
                            </div>
                            <NewComment/>
                        </div>

                    </div>                  

                </div>                
            </div>

        </div>
    )
}