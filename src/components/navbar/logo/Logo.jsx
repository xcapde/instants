import { Link } from "react-router-dom";

export function Logo () {

    return (
        <div className="logo_cnt">

            <Link to="/">
                <h1 className="logo">Instants</h1>
            </Link>
        </div>
    )
}