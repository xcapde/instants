import { Link } from "react-router-dom";

export function Logo () {


    return (
        <div className="logo_cnt">

            <Link to="/home">
                <h1 className="logo">INSTANTS</h1>
            </Link>
        </div>
    )
}