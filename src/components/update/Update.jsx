export function Update(props) {
    


    return(
        <section className={props.editIsActive? "update_pg slidein" : "update_pg hidden"}>

            <div className="update_box">
                <form className="inputs_box">
                    <label for="title">Title:</label>
                    <input className="title_input" name="title" id="title" type="text" placeholder="Write a title"/>

                    <label for="description">Description:</label>
                    <textarea className="description_input"  name="description" id="description" placeholder="Share a description"/>
                    
                    <label for="imageUrl">Image URL:</label>
                    <input className="imgurl_input" name="imageUrl" id="imageUrl" type="text" placeholder="URL"/>   
                    
                </form>
                <div className="update_btns">                    
                    <button onClick={props.showEdit} type="button" className="cancel_btn">CANCEL</button>
                    <button onClick={props.updateInstant} type="submit" className="update_btn">UPDATE</button>
                </div>
            </div>

        </section>
    )
}