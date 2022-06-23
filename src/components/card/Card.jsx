import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Card(props){

    const [instant, setInstant] = useState(props.instant)

    useEffect(() => {
        setInstant(props.instant)
    }, [props.instant])


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
                <Link to="/detail">                            
                    <img src={instant.imgUrl} alt=""/>
                </Link>
                <div className="like_count">{instant.likes} likes</div>
            </div>

                <div className="card_btns">                    
                    <div className="reaction_btns">
                        <button className="like_btn"><i className="fa-solid fa-heart"></i></button>
                        <button className="fav_btn"><i className="fa-solid fa-star"></i></button>                      
                    </div>
                    <div className="gestion_btns">
                        <button onClick={props.showEdit} className="edit_btn"><i className="fa-solid fa-pencil"></i></button>
                        <button onClick={props.deleteInstant} className="delete_btn"><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
        </section>
    )
}



