import { useState } from "react";
import { Link } from "react-router-dom";

export function Create(props) {

    const[newInstant, setNewInstant] = useState();

    const onInputChange=(e)=>{
        let value= e.target.value;
        let name = e.target.name;
        setNewInstant({...newInstant,[name]:value});
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();

        // props.addInstant();
        console.log('patata! no agafa props.addInstant')

    }

    const resetInputs=()=>{

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
                        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTdiavqt-4NU5TmpRZT52pz7fXVxlCPEeoDAzPA_j1R5BiHYz0fElpYY2xL07NriyZq" alt="preview"/>                                                
                    </div>
                    <form onSubmit={onHandleSubmit} className="inputs">
                        <input onChange={onInputChange}      name="title" type="text" placeholder="Title" autoFocus autocompleteatribut="on"/>
                        <input onChange={onInputChange}  name="imageUrl" type="text" placeholder="Image URL"/>
                        <textarea onChange={onInputChange}   name="description" placeholder="Description.."/>
                        <button type="submit" className="share_btn">SHARE</button>
                        <button onClick={resetInputs} className="mainBottom_btn" type="button">CLEAR ALL</button>
                    </form>
                </div>
            </div>

        </section>
    )
}