import { Link } from "react-router-dom";
import { List } from "../components/list/List";

export function Profile() {
    return(
        <div className="profile_pg">

                <div className="form_header">                    
                    <h1>PROFILE</h1>
                </div>

                <div className="profile_tabs">
                        <Link to="user_card">
                            <button ><i className="fa-solid fa-address-card"></i></button>
                        </Link>
                        <Link to="user_list">
                            <button ><i className="fa-solid fa-table-cells"></i></button>
                        </Link>
                        <button ><i className="fa-solid fa-list"></i></button>
                        <button ><i className="fa-solid fa-heart"></i></button>
                </div>

                <div className="profile_body">

                    <div className="tab_user">
                        {/* <UserCard/> */}
                    </div>
                    <div className="tab_imageList">
                        <List/>
                    </div>    
                    <div className="tab_likes">
                    </div>

                </div>
        </div>
    )
}