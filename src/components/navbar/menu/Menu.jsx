import { Link } from "react-router-dom";

export function Menu () {

    return (
        <div className="menu_cnt">

            <button className="signin_btn">
                <Link to="SignIn">Sing In</Link>
            </button>

        </div>
    )
}