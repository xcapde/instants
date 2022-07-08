import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { instantServices } from "../../data_API/instantServices";
import { instantServicesIJ } from "../../data_API/instantServicesIJ";
import { Navbar } from "../navbar/Navbar";

export function MainForm(props) {

    const [newInstant, setNewInstant] = useState(props.editIsActive?props.instantToEdit : {title:"",description:"", imgUrl:"", date:""})
    const navigate = useNavigate();

    const onInputChange=(e)=>{
        const name = e.target.name;
        const value= e.target.value;
        setNewInstant({...newInstant, [name]:value});
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        let id= newInstant.id;

        if(props.editIsActive){
        updateOneInstant(id, newInstant)
        } else{
        addInstant(newInstant)
        resetInputs()
        }    
    }

    const updateOneInstant=(id, newInstantData)=>{

        instantServicesIJ.putInstant(id, newInstantData).then((res) => {
            if(res);
            props.showEdit();
            props.getAllData();
            alert(`${res.title} updated!`)
            navigate("/home")
        });
    }

    const addInstant=(newInstantData)=>{

        instantServicesIJ.postInstant(newInstantData).then(res => {
            if(res)navigate("/home");
            alert(`${res.title} created`)
       });
    }

    const resetInputs=()=>{
        setNewInstant({
            title:"",
            description:"",
            imgUrl:"",
        })
    }

    return( 
        <section className={props.editIsActive? "mainForm_pg slide_in" : "mainForm_pg"}>

            {props.editIsActive?
            ''
            :
            <>
                <Navbar/>
                <div className="form_header">
                    <h1>NEW INSTANT</h1>
                </div>
            </>}

            <div className="mainForm_box">
                <form onSubmit={onHandleSubmit} className="inputs_box">
                <div className="mainForm_input_box title_box">
                        <label htmlFor="title">
                            <span className="form_icon"><i className="fa-solid fa-angles-right"></i></span>
                            Title:
                        </label>
                        <input onChange={onInputChange} value={newInstant.title||''} className="title_input" name="title" id="title" type="text" placeholder="Write a title" maxLength="30" autoFocus/>
                    </div>
                    <div className="mainForm_input_box">
                        <label htmlFor="location">
                            <span className="form_icon"><i className="fa-solid fa-location-dot"></i></span>
                            Location:
                        </label>
                        <input onChange={onInputChange} value={newInstant.location||''} className="location_input" name="location" id="location" type="text" placeholder="Where is it?"/>
                    </div>
                    <div className="mainForm_input_box">
                        <label htmlFor="description">
                            <span className="form_icon"><i className="fa-solid fa-align-left"></i></span>
                            Description:
                        </label>
                        <textarea onChange={onInputChange} value={newInstant.description||''} className="description_input"  name="description" id="description" placeholder="Write a description"/>
                    </div>
                    <div className="mainForm_input_box">
                        <label htmlFor="imgUrl">
                            <span className="form_icon"><i className="fa-solid fa-image"></i></span>
                            Image:
                        </label>
                        <div className={newInstant.imgUrl? "preview_and_url reduced" : "preview_and_url"}>
                            {newInstant.imgUrl?<img src={newInstant.imgUrl} alt="preview"/>:''}                                                
                            <input onChange={onInputChange} value={newInstant.imgUrl||''} className="imgurl_input" name="imgUrl" id="imgUrl" type="text" placeholder="Image URL"/>          
                        </div>
                    </div>
                    <div className="mainForm_btns">
                        <button onClick={resetInputs} type="button" className="close_btn"><i className="fa-solid fa-xmark"></i><span className="close_txt">CLEAR</span></button>                                            
                        <button onClick={props.editIsActive? props.showEdit : () => navigate(-1)} type="button" className="cancel_btn">CANCEL</button>
                        <button type="submit" className="mainForm_btn">{props.editIsActive?'UPDATE':'SHARE'}</button>
                    </div>                       
                </form>
                
            </div>

        </section>
    )
}