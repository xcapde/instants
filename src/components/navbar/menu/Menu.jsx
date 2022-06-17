import { Link } from "react-router-dom";
import { UserCard } from "../../user/UserCard";

export function Menu () {

    return (
        <div className="menu_cnt">


        <button className='search_bottom'>
        <span className='nav_icon'><i className="fa-solid fa-magnifying-glass"></i></span>
        <span className='nav_name'>SEARCH</span></button>

        <Link to="/">
            <button className="home_btn">
            <span className='nav_icon'><i className="fa-solid fa-house"></i></span>
            <span className='nav_name'>HOME</span></button>
        </Link>

        {/* <button className="profile_btn">
        <span className='nav_icon'><i className="fa-solid fa-circle-user"></i></span>
        <span className='nav_name'> PROFILE</span></button> */}

        <button className="profile_btn">
            <UserCard/>
        </button>

        <Link to="/create">
            <button className="create_btn">
            <span className='nav_icon'><i className="fa-solid fa-plus"></i></span>
            <span className='nav_name'> CREATE</span></button>
        </Link>
        
        <Link to="/login">
            <button className="login_btn">
            <span className='nav_icon'><i className="fa-solid fa-user"></i></span>
            <span className='nav_name'> LOG IN</span></button>
        </Link>

        </div>

    )
}