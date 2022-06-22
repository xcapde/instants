import { Link } from "react-router-dom";
import { List } from "../components/list/List";

export function Profile() {
    return(
        <div className="profile_pg">

                <div className="form_header">
                    <div className="back_cnt">
                        <Link to="/">                    
                            <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                        </Link>
                    </div>
                    <h1>PROFILE</h1>
                </div>

                <div className="profile_tabs">
                        <Link to="user_card">
                            <button ><i class="fa-solid fa-address-card"></i></button>
                        </Link>
                        <Link to="user_list">
                            <button ><i class="fa-solid fa-table-cells"></i></button>
                        </Link>
                        <button ><i class="fa-solid fa-list"></i></button>
                        <button ><i class="fa-solid fa-star"></i></button>
                </div>

                <div className="profile_body">

                    <div className="tab_user">
                        {/* <UserCard/> */}
                    </div>
                    <div className="tab_imageList">
                        <List/>
                    </div>
                    {/* <div className="tab_list">
                        <List/>
                    </div> */}
                    <div className="tab_favs">
                        {/* <List/> */}
                    </div>

                </div>
        </div>
    )
}