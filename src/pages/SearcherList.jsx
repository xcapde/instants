import { Link } from "react-router-dom";
import { List } from "../components/list/List";
import { SearcherMobile } from "./SearcherMobile";

export function SearcherList() {
    return(
<div className="searcher_list_pg">
            
            <div className="back_cnt"><Link to="/"><button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button></Link></div>
            <SearcherMobile/>
            <List/>

        </div>
    )
}