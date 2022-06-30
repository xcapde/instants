import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "../components/list/List";
import { SearcherMobile } from "./SearcherMobile";

export function SearcherList() {

    // const [searchList, setSearchList] = useState([])

    // useEffect(() => {
    //     getSearchInstants()
    //     setSearchList(searchList)

    // }, [searchList])

    return(
        <div className="searcher_list_pg">
            <Link to="/home">
                <div className="back_cnt"><button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button></div>
            </Link>
            
            {/* <SearcherMobile/> */}
            <List/>

        </div>
    )
}