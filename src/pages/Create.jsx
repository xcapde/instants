import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Create() {

    const[newInstant, setNewInstant] = useState({title:"",description:"", imgUrl:""});
    // const[imagePreview, setImagePreview] = useState(false);

    // useEffect(() => {
    //     setNewInstant(newInstant);
    //     },[newInstant]
    //   )

    const onInputChange=(e)=>{
        const name = e.target.name;
        const value= e.target.value;
        setNewInstant({...newInstant, [name]:value});

        console.log(e.target.value)
    }    

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        addInstant();        
        resetInputs();
    }

    const resetInputs=()=>{
        setNewInstant({
            title:"",
            description:"",
            imgUrl:"",
        })

        console.log('reseting inputs')
    }

    const addInstant=()=>{
        console.log('add')
    }

    // const showImagePreview=()=>{
    //     if(newInstant.imgUrl.length = 0)
    // }


    return(
        <section className="create_pg">

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
                        <img src={newInstant.imgUrl} alt="preview"/>                                                
                    </div>
                    <form onSubmit={onHandleSubmit} className="inputs">
                        <input onChange={onInputChange} value={newInstant.title} name="title" type="text" placeholder="Title" autoFocus autocompleteatribut="on"/>
                        <input onChange={onInputChange} value={newInstant.imgUrl} name="imgUrl" type="text" placeholder="Image URL"/>
                        <textarea onChange={onInputChange} value={newInstant.description} name="description" placeholder="Description.."/>
                        <button type="submit" className="share_btn">SHARE</button>
                        <button onClick={resetInputs} className="mainBottom_btn" type="button">CLEAR ALL</button>
                    </form>
                </div>
            </div>

        </section>
    )
}