import { Card } from "../card/Card";
import appData from "../../../src/data_API/appData.json";
import { useState } from "react";
import { Update } from "../update/Update";
import { Spinner } from "../spinner/Spinner";
import { Modal } from "../modal/Modal";

export function List () {

    const[instants] = useState(appData);


    return(
        <div className="list_pg">
            
            <div className="list_cnt">
                
                {/* <Spinner/> */}
                {/* <Modal/> */}
                {/* <Update/> */}

                <>{instants.map((instant,key) =>
                    <Card key={key} instant={instant}/>
                    )}</>

            </div>
        </div>
    )
}