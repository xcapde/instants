import { Card } from "../card/Card";
// import appData from "../../../src/data_API/appData.json";
// import { instantServices } from "../../data_API/instantServices";
import { useState } from "react";
import { useEffect } from "react";
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

        let selectedInstant = instants.filter(i => i.id === id);
        let confirmation = window.confirm(`❌ Delete ${selectedInstant[0].title}?`)

        if(confirmation){
        instantServicesIJ.deleteAInstant(parseInt(id)).then(res => {
            if(res){getAllData();
            alert(`❌ Deleted!`)
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