import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import { instantServicesIJ } from "../../data_API/instantServicesIJ";
import { NewComment } from "../comment/NewComment";

export function Card(props){

    const [instant, setInstant] = useState(props.instant);
    const [commentIsActive, setCommentIsActive] = useState(false);
    // const [likedList, setLikedList] = useState([]);

    useEffect(() => {
        setInstant(props.instant);
    }, [props.instant])


    // const getLikedList = () => {
    // //     instantServicesIJ.getLikedInstants().then(res => {
    // //         if(res) 
    // //         setLikedList(res);
    // //     })
    // //     console.log(likedList)
    // };

    const markLiked = (instant) => {

        // let card = instant;

        // if(card.liked === false){ card.liked = true;
        //     alert(`✅ ${card.title} liked!`)} 

        // else if(card.liked === true){card.liked = false;
        //     alert(`❌ ${card.title} unliked!`)};

        // instantServicesIJ.putInstant(card.id, card).then(res =>{            
        //     if(res)
        //     props.getAllData();
        //     // getLikedList();
        // })
    };

    const showCommentInput = () =>{
        setCommentIsActive(!commentIsActive)
    };

    return (
        <section className="card_cnt">
            <div className="card_txt">
                <div className="user_cnt">
                    {instant.creator.avatar?
                    <img className="user_avatar" src={instant.creator.avatar} alt="creator avatar"/>
                    :
                    <div className="user_photo"><i className="fa-solid fa-circle-user"></i></div>}
                    <h1 className="user_name">{instant.creator.name} {instant.creator.surname}</h1>
                </div>
                <h1 className="title_txt">{instant.title}</h1>
                <h1 className="description_txt">{instant.description}</h1>
            </div>

            <div className="card_img">
                <Link to={`/detail/${instant.id}`} instant={instant}>                            
                    <img src={instant.imgUrl} alt=""/>
                </Link>
                <div className={!instant.commentsCount?"comment_count inputHidden" : "comment_count"}><i className="fa-solid fa-message"></i>{instant.commentsCount}</div>
                <div className={!instant.likesCount?"like_count inputHidden" : "like_count"}><i className="fa-solid fa-heart"></i>{instant.likesCount}</div>
                <div className={!instant.location? "ubication inputHidden" : "ubication"}><i className="fa-solid fa-location-dot"></i>{instant.location}</div>
                <div className="expands"><i className="fa-solid fa-expand"></i></div>                
            </div>

                <div className="card_btns">                    
                        <button onClick={()=>markLiked(instant)} className={instant.liked? "like_btn liked":"like_btn"}><i className="fa-solid fa-heart"></i></button>
                        <button onClick={()=>showCommentInput()} className={instant.commented? "comment_btn commented":"comment_btn"}><i className="fa-solid fa-message"></i></button>                      
                        
                        <button onClick={()=>props.showEdit(instant)} className="edit_btn"><i className="fa-solid fa-pencil"></i></button>
                        <button onClick={()=>props.deleteInstant(instant.id)} className="delete_btn"><i className="fa-solid fa-trash-can"></i></button>
                    
                    {commentIsActive? 
                        <NewComment showCommentInput={showCommentInput} id={instant.id} getAllData={props.getAllData} commentIsActive={commentIsActive}/>
                        :
                        null
                    }
                
                </div>

        </section>
    )
}



