import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { instantServices } from "../data_API/instantServices";

export function Create() {

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
            if(res)navigate("/home");
       });
    }


    return( 
        <section className="update_pg">

            {/* <Navbar/> */}

            <div className="form_header">
                <div className="back_cnt">
                    <Link to="/home">                    
                        <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                    </Link>
                </div>
                <h1>NEW INSTANT</h1>
            </div>

            <div className="update_box">
                <form onSubmit={onHandleSubmitCreate} className="inputs_box">
                    <div className="update_input_box title_box">
                        <label htmlFor="title">Title:</label>
                        <input onChange={onInputChangeCreate} value={newInstant.title} className="title_input" name="title" id="title" type="text" placeholder="Write a title" autoFocus/>
                    </div>
                    <div className="update_input_box">
                        <label htmlFor="description">Description:</label>
                        <textarea onChange={onInputChangeCreate} value={newInstant.description} className="description_input"  name="description" id="description" placeholder="Write a description"/>
                    </div>
                    <div className="update_input_box">
                        <label htmlFor="imgUrl">Image:</label>
                        <div className="preview_and_url create">
                            {newInstant.imgUrl?<img src={newInstant.imgUrl} alt="preview"/>:''}                                                
                            <input onChange={onInputChangeCreate} value={newInstant.imgUrl} className="imgurl_input" name="imgUrl" id="imgUrl" type="text" placeholder="Image URL"/>          
                        </div>
                    </div>
                    <div className="update_btns">
                        <Link to="/home">
                            <button  type="button" className="cancel_btn">CANCEL</button>                    
                        </Link>
                        <button onClick={resetInputsCreate} type="button" className="close_btn"><i className="fa-solid fa-xmark"></i><span className="close_txt">CLEAR</span></button>                        
                        <button type="submit" className="update_btn">SHARE</button>
                    </div>                    
                </form>
                
            </div>

        </section>
    )
}