import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";

export function SearcherList({searchList,searchValue}) {

    const navigate = useNavigate();

    return(
        <div className="searcher_list_pg">
            <div className="back_cnt">
                <button onClick={()=>navigate(-0)} className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
            </div>
           
            <div className="search_box">
                <div className="results_info">{searchList.length === 0 && searchValue.length < 3? 'Press "enter" for results' : searchList.length === 0? 'No results' : `${searchList.length} results`}</div>

                {searchList.map((instant,key) =>
                <Card key={key} instant={instant}/>).reverse()}
                
            </div>
            
        </div>
    )
}