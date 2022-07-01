import { Link } from "react-router-dom";
import { Searcher } from "../components/navbar/searcher/Searcher";
import { SearcherList } from "./SearcherList";

export function SearcherMobile() {
    return(
<div className="searcher_pg">
                
                <div className="form_header">
                    
                    <Searcher/>
                
                </div>                

        </div>
    )
}