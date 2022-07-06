import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NewComment } from "../comment/NewComment";

export function Card(props){

    const [instant, setInstant] = useState(props.instant);
    // const [isLiked, setIsLiked] = useState(false);
    const [commentIsActive, setCommentIsActive] = useState(false);

    useEffect(() => {
        setInstant(props.instant)
    }, [props.instant])

    const markLiked = () => {
        // setIsLiked(!isLiked)        
        // props.getAllData()
        // console.log(`✅ ${instant.title} Liked or not!`)
        // console.log(`❌ ${instant.title} removed from liked!`)
    };

    const showCommentInput = () =>{
        setCommentIsActive(!commentIsActive)
        console.log(commentIsActive)        
    };

    return (
        <section className="card_cnt">
            <div className="card_txt">
                <div className="user_cnt">
                    <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
                    <h1 className="user_name">{instant.userName}</h1>
                </div>
                <h1 className="title_txt">{instant.title}</h1>
                <h1 className="description_txt">{instant.description}</h1>
            </div>

            <div className="card_img">
                <Link to={`/detail/${instant.id}`} instant={instant}>                            
                    <img src={instant.imgUrl} alt=""/>
                </Link>
                <div className="comment_count"><i className="fa-solid fa-message"></i>{instant.comments}</div>
                <div className="like_count"><i className="fa-solid fa-heart"></i>{instant.likes}</div>
                <div className="ubication"><i className="fa-solid fa-location-dot"></i>{instant.location}</div>
                <div className="expands"><i className="fa-solid fa-expand"></i></div>                
            </div>

                <div className="card_btns">                    
                        <button onClick={()=>markLiked()} className={instant.isLike? "like_btn liked":"like_btn"}><i className="fa-solid fa-heart"></i></button>
                        <button onClick={()=>showCommentInput()} className={instant.isComment? "comment_btn commented":"comment_btn"}><i className="fa-solid fa-message"></i></button>                      
                        
                        <button onClick={()=>props.showEdit(instant)} className="edit_btn"><i className="fa-solid fa-pencil"></i></button>
                        <button onClick={()=>props.deleteInstant(instant.id)} className="delete_btn"><i className="fa-solid fa-trash-can"></i></button>
                    
                    {commentIsActive? 
                        <NewComment showCommentInput={showCommentInput} />
                        :
                        null
                    }
                
                </div>

        </section>
    )
}



