import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instantServices } from "../../../data_API/instantServices";

export function Searcher(props){

    const [searchValue, setSearchValue] = useState({value:""})
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        setSearchValue(searchValue)
        onHandleSubmitSearch()
    }, [searchValue])

    const onHandleSubmitSearch=(e)=>{
        // e.preventDefault();
        // showSearchList(); 
        console.log('show result')
    }
 
    const onInputChangeSearch=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setSearchValue({...searchValue, [name]:value});
        
        instantServices.getInstantsBySearch(value).then(res => {
            if(res) setSearchList(res);  
            console.log(res)          
         })

        // console.log(searchList)
    }    

    // const resetInputsSearch=()=>{
    //     setSearchValue('')
    //     console.log('cleaned!')
    // }    

    return (
        <form onSubmit={onHandleSubmitSearch} className="searcher">
            
            <Link to="/searcher">
                <input onChange={onInputChangeSearch} value={searchValue.search ||''} placeholder="Search..." name="search" type="text"/>
            </Link>
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            {/* <button onClick={resetInputsSearch} className="closeSearch_btn" type="button"><i className="fa-solid fa-xmark"></i></button> */}
        </form>
    )
}