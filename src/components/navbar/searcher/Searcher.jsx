import { useState } from "react";
import { instantServices } from "../../../data_API/instantServices";
import { SearcherList } from "../../../pages/SearcherList";

export function Searcher(){

    const [searchValue, setSearchValue] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [searchIsActive, setSearchIsActive] = useState(false);

    const onInputChangeSearch=(e)=>{
        const value = e.target.value;

        setSearchValue(value);      
        if(value.length > 2){
            getSearch(searchValue.toLowerCase().trim())
        } return
    }    

    const onHandleSubmitSearch=()=>{

        getSearch(searchValue.toLowerCase().trim())
        console.log('👁️‍🗨️Result', searchValue)
    }
    
    const getSearch=(value)=>{
        instantServices.getInstantsBySearch(value).then(res => {
            if(res) setSearchList(res);  
            
            console.log('🔎',res.length, res)          
        })
    }     
  

    return (
        <form onSubmit={onHandleSubmitSearch} className="searcher">
            
            <input onChange={onInputChangeSearch} value={searchValue ||''} placeholder="Search..." name="search" type="text"/>
            <button className="search_submit_btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>

            {searchValue.length > 0?
                <SearcherList searchList={searchList}/>
                : ''
            }
         
        </form>
    )
}