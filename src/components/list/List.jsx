import { Card } from "../card/Card";
// import appData from "../../../src/data_API/appData.json";
import { useState } from "react";
import { useEffect } from "react";
import { instantServices } from "../../data_API/instantServices";
import { Navbar } from "../navbar/Navbar";
import { MainForm } from "../mainForm/MainForm";
import { Spinner } from "../spinner/Spinner";
import { instantServicesIJ } from "../../data_API/instantServicesIJ";

export function List () {

    const[instants, setInstants] = useState([]);
    const[editIsActive, setEditIsActive] = useState(false);
    const[instantToEdit, setInstantToEdit] = useState('');
    const[isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getAllData();
    },[]
    );
   
    const getAllData=()=>{
        setIsLoading(true)
        instantServicesIJ.getAllInstants().then(res => {
            setInstants(res);
            setIsLoading(false);
       })
    }

    const showEdit=(instant)=>{
        setEditIsActive(!editIsActive);
        setInstantToEdit(instant);
    }
   
    const deleteInstant=(id)=>{

        let confirmation = window.confirm('❌ Delete this photo?')

        if(confirmation){
        instantServicesIJ.deleteAInstant(parseInt(id)).then(res => {
            if(res){getAllData();
            alert(`${res.title} deleted!`)
            }
        });
        } return;
    }

    return(
        <section className="list_pg">  

            <Navbar/> 

            {isLoading?
                <Spinner/>
                :''}

            <div className="list_cnt">              

                {editIsActive?
                    <MainForm editIsActive={editIsActive} showEdit={showEdit} instantToEdit={instantToEdit} getAllData={getAllData}/>
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