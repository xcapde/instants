import { Card } from "../card/Card";
import appData from "../../../src/data_API/appData.json";
import { useState } from "react";
import { Update } from "../update/Update";

export function List () {

    const[instants] = useState(appData);
    const[createIsActive, setCreateIsActive] = useState(false);
    const[editIsActive, setEditIsActive] = useState(false);
    const[editIndex, setEditIndex] = useState('');
    const[favList, setFavList] = useState([]);
    const[likeList, setLikeList] = useState([]);

    const createInstant=()=>{
        console.log('create')
    }

    const showEdit=()=>{
        setEditIsActive(!editIsActive);
        console.log('showUpdate')
        console.log(editIsActive)
    }

    const updateInstant=()=>{
        console.log('update')
        showEdit();
        console.log(editIsActive)
    }

    const deleteInstant=()=>{
        console.log('delete')

    }


    return(
        <section className="list_pg">
            
            <div className="list_cnt">
                
                {/* <Spinner/> */}
                {/* <Modal/> */}
                <Update editIsActive={editIsActive} showEdit={showEdit} updateInstant={updateInstant}/>

                <>{instants.map((instant,key) =>
                    <Card key={key} instant={instant} deleteInstant={deleteInstant} showEdit={showEdit} editIsActive={editIsActive}/>
                    )}</>

            </div>
        </section>
    )
}