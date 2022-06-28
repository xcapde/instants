import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NewComment } from "../comment/NewComment";

export function Card(props){

    const [instant, setInstant] = useState(props.instant)

    useEffect(() => {
        setInstant(props.instant)
    }, [props.instant])


    const markFavorite = (instant) => {

        if(instant.isFav === false){instant.isFav = true 
        // console.log(`✅ ${instant.title} added to favorites!`)
        // console.log(instant.isFav)
        }

        else {instant.isFav = false;
        // console.log(`❌ ${instant.title} removed from favorites!`)
        // console.log(instant.isFav)
        }

        props.getAllData()
        // console.log(instant.isFav)
    };

    const markLiked = (instant) => {

        if(instant.isLike === false){instant.isLike = true 
        // console.log(`✅ ${instant.title} Liked!`)
    }

        else instant.isLike = false;
        // console.log(`❌ ${instant.title} removed from liked!`)

        props.getAllData()
    };

    return (
        <section className="card_cnt">
            <div className="card_txt">
                <div className="user_cnt">
                    <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>
                    <h1 className="user_name">{instant.userName}</h1>
                </div>
                <h1>{instant.title}</h1>
            </div>

            <div className="card_img">
                <Link to={`/detail/${instant.id}`} instant={instant}>                            
                    <img src={instant.imgUrl} alt=""/>
                </Link>
                <div className="comment_count"><i className="fa-solid fa-message"></i>{instant.comments}</div>
                <div className="like_count"><i className="fa-solid fa-heart"></i>{instant.likes}</div>
                <div className="ubication"><i className="fa-solid fa-location-dot"></i>Location</div>
            </div>

                <div className="card_btns">                    
                    <div className="reaction_btns">
                        <button onClick={()=>markLiked(instant)} className={instant.isLike? "like_btn liked":"like_btn"}><i className="fa-solid fa-heart"></i></button>
                        <button onClick={()=>markFavorite(instant)} className={instant.isComment? "comment_btn commented":"comment_btn"}><i class="fa-solid fa-message"></i></button>                      
                        {/* <button onClick={()=>markFavorite(instant)} className={instant.isLike? "fav_btn favorited":"fav_btn"}><i className="fa-solid fa-star"></i></button>                       */}
                    </div>
                    <div className="gestion_btns">
                        <button onClick={()=>props.showEdit(instant)} className="edit_btn"><i className="fa-solid fa-pencil"></i></button>
                        <button onClick={()=>props.deleteInstant(instant.id)} className="delete_btn"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                    {/* <NewComment/> */}
                </div>

        </section>
    )
}



