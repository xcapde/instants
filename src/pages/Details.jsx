import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "../components/comment/Comment";
import { NewComment } from "../components/comment/NewComment";
import { Navbar } from "../components/navbar/Navbar";
import { Spinner } from "../components/spinner/Spinner";
import { commentServicesIJ } from "../data_API/commentServicesIJ";
// import { instantServices } from "../data_API/instantServices";
import { instantServicesIJ } from "../data_API/instantServicesIJ";

export function Details(props) {

    const [instantInfo, setInstantInfo] = useState({});
    const[comments, setComments] = useState();
    const[isLoading, setIsLoading] = useState(false);
    const [id] = useState(useParams().id)
    const navigate = useNavigate();


    useEffect(() => {
        if(!id)return

        const showDetails = () => {
            setIsLoading(true)
            instantServicesIJ.getInstantById(id).then(res => {
                if(res){
                    setInstantInfo(res);
                    // setIsLoading(false);
                }
              });
            setIsLoading(false);
        }
        
        showDetails();
        
    },[id, instantInfo.commentsCount]);


    useEffect(()=>{

        const getAllCommentsByInstantId=()=>{
            commentServicesIJ.getCommentsByInstantId(id).then(res => {
                setComments(res);
           })
        }

        getAllCommentsByInstantId(id);
    },[id])  

    return(
        <div className="details_pg">
            <Navbar/>

            {isLoading?
                <Spinner/>
                :''}

            <div className="details_cnt">

                <div className="details_photo">
                        <img src={instantInfo.imgUrl} alt="preview"/>                                           
                        <div className="comment_count"><i className="fa-solid fa-message"></i>{instantInfo.commentsCount}</div>   
                        <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                        <div className="ubication"><i className="fa-solid fa-location-dot"></i>{instantInfo.location}</div>
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
                                <div className="comment_count"><i className="fa-solid fa-message"></i>{instantInfo.commentsCount}</div>                                              
                                <div className="like_count"><i className="fa-solid fa-heart"></i>{instantInfo.likes}</div>
                                <div className="ubication"><i className="fa-solid fa-location-dot"></i>{instantInfo.location}</div>
                            </div>                          
                            <div className="description_box">
                                <div className="user_cnt">
                                    <img className="user_avatar" src={instantInfo && instantInfo.creator? instantInfo.creator.avatar : '' } alt="creator avatar"/>
                                    <h1 className="user_name">{instantInfo && instantInfo.creator? instantInfo.creator.name : ''} {instantInfo && instantInfo.creator? instantInfo.creator.surname : ''}</h1>
                                </div> 
                                <p>{instantInfo.description}</p>
                            </div>
                        </div>

                        <div className="comments_box">
                            <div className="users_comments">
                                {/* <Comment/> */}
                                
                                <>{comments? comments.map((comment,key) =>
                                    <Comment key={key} comment={comment} />
                                    ).reverse()
                                    : ''}
                                </>
                                        
                            </div>
                            <NewComment id={id}/>
                        </div>

                    </div>                  

                </div>                
            </div>

        </div>
    )
}