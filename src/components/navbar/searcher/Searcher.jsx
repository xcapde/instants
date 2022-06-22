import { Link } from "react-router-dom";

export function Searcher(){
    return (
        <div className="searcher">
            <Link to="/searcher_list">
                <input type="text" placeholder="Search..." />
            </Link>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}