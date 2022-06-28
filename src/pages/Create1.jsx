import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instantServices } from "../data_API/instantServices";

export function Create1() {

    const[newInstant, setNewInstant] = useState({title:"",description:"", imgUrl:""});
    const navigate = useNavigate();

    const onInputChangeCreate=(e)=>{
        const name = e.target.name;
        const value= e.target.value;
        setNewInstant({...newInstant, [name]:value});

        console.log(e.target.value)
    }    

    const onHandleSubmitCreate=(e)=>{
        e.preventDefault();

        addInstant(newInstant); 

        resetInputsCreate();
    }

    const resetInputsCreate=()=>{
        setNewInstant({
            title:"",
            description:"",
            imgUrl:"",
        })
    }

    const addInstant=(newInstantData)=>{

        instantServices.postInstant(newInstantData).then(res => {
            if(res)navigate("/");
       });
    }


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
                        {newInstant.imgUrl?<img src={newInstant.imgUrl} alt="preview"/>:''}                                                
                    </div>
                    <form onSubmit={onHandleSubmitCreate} className="inputs">
                        <input onChange={onInputChangeCreate} value={newInstant.title} name="title" type="text" placeholder="Title" autoFocus autocompleteatribut="on"/>
                        <input onChange={onInputChangeCreate} value={newInstant.imgUrl} name="imgUrl" type="text" placeholder="Image URL"/>
                        <textarea onChange={onInputChangeCreate} value={newInstant.description} name="description" placeholder="Description.."/>
                        
                        <button type="submit" className="share_btn">SHARE</button>
                        <button onClick={resetInputsCreate} className="mainBottom_btn" type="button">CLEAR ALL</button>
                    </form>
                </div>
            </div>

        </section>
    )
}