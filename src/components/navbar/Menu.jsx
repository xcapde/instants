import { Link, useLocation } from "react-router-dom";
import { UserCard } from "../../pages/profile/UserCard";

export function Menu () {

    const  params = useLocation().pathname;

    return (
        <div className="menu_cnt">

        <Link to="/home">
            <button className={params.includes('/home')?"home_btn menu_active" : "home_btn"}>
            <span className='nav_icon'><i className="fa-solid fa-house"></i></span>
            <span className='nav_name'>HOME</span></button>
        </Link>

        <Link to="/searcher_mobile">
            <button className={params.includes('/searcher')?"search_bottom menu_active" : 'search_bottom'}>
            <span className='nav_icon'><i className="fa-solid fa-magnifying-glass"></i></span>
            <span className='nav_name'>SEARCH</span></button>
        </Link>
        
        <Link to="/profile">
            <button className={params.includes('profile')?"profile_btn menu_active" : "profile_btn"}>
                <UserCard/>
            </button>
        </Link>
        <Link to="/create">
            <button className={params.includes('create')?"create_btn menu_active" : "create_btn"}>            
            <span className='nav_icon'><i className="fa-solid fa-plus"></i></span>
            <span className='nav_name'> CREATE</span></button>
        </Link>        
        <Link to="/login">
            <button className={params.includes('login')?"login_btn menu_active" : "login_btn"}>
            <span className='nav_icon'><i className="fa-solid fa-user"></i></span>
            <span className='nav_name'> LOG IN</span></button>
        </Link>
        
        {/* <button className="profile_btn">
        <span className='nav_icon'><i className="fa-solid fa-circle-user"></i></span>
        <span className='nav_name'> PROFILE</span></button> */}
        
        </div>

    )
}