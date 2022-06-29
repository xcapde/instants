import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instantServices } from "../../data_API/instantServices";

export function Update(props) {

    const[newInstant, setNewInstant] = useState(props.instantToEdit)
    // const[newInstant, setNewInstant] = useState(props.instantToEdit?props.instantToEdit:{title:'', description:'', imgUrl:''})
    const navigate = useNavigate();

    useEffect(() => {
        setNewInstant(props.instantToEdit)

    }, [props.instantToEdit])

    const onInputChangeUpdate=(e)=>{
        e.persist()
        const name = e.target.name;
        const value= e.target.value;
        setNewInstant({...newInstant, [name]:value});
    }

    const onHandleSubmitUpdate=(e)=>{
        e.preventDefault();

        let id= newInstant.id;     
        updateOneInstant(id, newInstant); 
        
        navigate("/")
    }

    const updateOneInstant=(id, newInstantData)=>{

        instantServices.putInstant(id, newInstantData).then((res) => {
            if(res);
            props.showEdit();
        });
    }

    console.log(newInstant)
    console.log(props.instantToEdit)
    // console.log(newInstant.title)
    return( 
        <section className={props.editIsActive? "update_pg slide_in" : "hidden"}>

            <div className="update_box">
                <form onSubmit={onHandleSubmitUpdate} className="inputs_box">
                    <div className="update_input_box title_box">
                        <label htmlFor="title">Title:</label>
                        <input onChange={onInputChangeUpdate} value={newInstant.title||''} className="title_input" name="title" id="title" type="text" placeholder="Write a title"/>
                    </div>
                    <div className="update_input_box">
                        <label htmlFor="description">Description:</label>
                        <textarea onChange={onInputChangeUpdate} value={newInstant.description||''} className="description_input" name="description" id="description" placeholder="Write a description" type="text"/>
                    </div>
                    <div className="update_input_box">
                        <label htmlFor="imgUrl">Image:</label>
                        <div className="preview_and_url">
                            {newInstant.imgUrl?<img src={newInstant.imgUrl} alt="preview"/>:''}                                                
                            <input onChange={onInputChangeUpdate} value={newInstant.imgUrl||''} className="imgurl_input" name="imgUrl" id="imgUrl" type="text" placeholder="Image URL"/>          
                        </div>
                    </div>
                    <div className="update_btns">                    
                        <button onClick={props.showEdit} type="button" className="cancel_btn">CANCEL</button>
                        <button type="submit" className="update_btn">UPDATE</button>
                    </div>                    
                </form>
                
            </div>

        </section>
    )
}