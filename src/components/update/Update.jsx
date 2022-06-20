export function Update() {
    return(
        <div className="update_pg full_blur">

            <div className="update_box">
                <div className="inputs_box">
                    <label for="title">Title:</label>
                    <input className="title_input" name="title" id="title" type="text" placeholder="Write a title"/>

                    <label for="description">Description:</label>
                    <textarea className="description_input"  name="description" id="description" placeholder="Share a description"/>
                    
                    <label for="imageUrl">Image URL:</label>
                    <input className="imgurl_input" name="imageUrl" id="imageUrl" type="text" placeholder="URL"/>
                    
                    <div className="update_btns">                    
                        <button type="button" className="cancel_btn">CANCEL</button>
                        <button type="submit" className="update_btn">UPDATE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}