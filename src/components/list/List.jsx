import { Card } from "../card/Card";
// import appData from "../../../src/data_API/appData.json";
import { useState } from "react";
import { Update } from "../update/Update";
import { useEffect } from "react";
import { instantServices } from "../../data_API/instantServices";
import { Navbar } from "../navbar/Navbar";

export function List () {

    const[instants, setInstants] = useState([]);
    const[editIsActive, setEditIsActive] = useState(false);
    const[instantToEdit, setInstantToEdit] = useState('');

    // const[likeList, setLikeList] = useState([]);

    useEffect(() => {
        getAllData();
    },[]
    );
   
    const getAllData=()=>{
        instantServices.getAllInstants().then(res => {
            setInstants(res);
       })
    }

    const showEdit=(instant)=>{
        setEditIsActive(!editIsActive);
        setInstantToEdit(instant);
    }
   
    const deleteInstant=(id)=>{

        let confirmation = window.confirm('❌ Delete this photo?')

        if(confirmation){
        instantServices.deleteAInstant(parseInt(id)).then(res => {
            if(res) getAllData();
        });
        } return;
    }

    return(
        <section className="list_pg">  

            <Navbar/>          

            <div className="list_cnt">              

                {editIsActive?
                    <Update editIsActive={editIsActive} showEdit={showEdit} instantToEdit={instantToEdit} getAllData={getAllData}/>
                :''}

                <>{instants.map((instant,key) =>
                    <Card key={key} instant={instant} deleteInstant={deleteInstant} showEdit={showEdit} editIsActive={editIsActive}
                    getAllData={getAllData}/>
                    ).reverse()}
                </>

            </div>            
        </section>
    )
}