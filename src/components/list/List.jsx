import { Card } from "../card/Card";
import appData from "../../../src/data_API/appData.json";
import { useState } from "react";

export function List () {

    const[instants] = useState(appData);


    return(

        <div className="list_pg">

            <div className="list_cnt">
                <>{instants.map((instant,key) =>
                    <Card key={key} instant={instant}/>
                    )}</>
            </div>
        </div>
    )
}