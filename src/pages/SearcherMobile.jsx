import { Link } from "react-router-dom";
import { Searcher } from "../components/navbar/searcher/Searcher";
import { SearcherList } from "./SearcherList";

export function SearcherMobile() {
    return(
<div className="searcher_pg">
                
                <div className="form_header">
                    <div className="back_cnt"><Link to="/"><button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button></Link></div>
                    
                    <Searcher/>
                
                </div>                

        </div>
    )
}