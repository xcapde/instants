import { useEffect, useState } from "react";
import { instantServices } from "../../data_API/instantServices";

export function Update(props) {

    const[newInstant, setNewInstant] = useState(props.instantToEdit)
    // const[newInstant, setNewInstant] = useState(props.instantToEdit?props.instantToEdit:{title:'', description:'', imgUrl:''})

    useEffect(() => {
        setNewInstant(props.instantToEdit)

    }, [props.instantToEdit])

    const onInputChangeUpdate=(e)=>{
        const name = e.target.name;
        const value= e.target.value;
        setNewInstant({...newInstant, [name]:value});
    }

    const onHandleSubmitUpdate=(e)=>{
        e.preventDefault();

        let id= newInstant.id;     
        updateOneInstant(id, newInstant);

        props.getAllData();
    }

    const updateOneInstant=(id, newInstantData)=>{

        instantServices.putInstant(id, newInstantData).then((res) => {
            if(res);
        });

        props.showEdit();
    }

    console.log(props.instantToEdit)
    return( 
        <section className={props.editIsActive? "update_pg slidein" : "update_pg hidden"}>

            <div className="update_box">
                <form onSubmit={onHandleSubmitUpdate} className="inputs_box">
                    <label htmlFor="title">Title:</label>
                    <input onChange={onInputChangeUpdate} value={newInstant.title} className="title_input" name="title" id="title" type="text" placeholder="Write a title"/>

                    <label htmlFor="description">Description:</label>
                    <textarea onChange={onInputChangeUpdate} value={newInstant.description} className="description_input"  name="description" id="description" placeholder="Share a description"/>
                    
                    <label htmlFor="imgUrl">Image URL:</label>
                    <input onChange={onInputChangeUpdate} value={newInstant.imgUrl} className="imgurl_input" name="imgUrl" id="imgUrl" type="text" placeholder="URL"/>          
                
                    <div className="update_btns">                    
                        <button onClick={props.showEdit} type="button" className="cancel_btn">CANCEL</button>
                        <button type="submit" className="update_btn">UPDATE</button>
                    </div>                    
                </form>
                
            </div>

        </section>
    )
}