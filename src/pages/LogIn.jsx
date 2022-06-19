import { Link } from "react-router-dom";

export function LogIn() {
    return(
        <div className="login_pg">

            <div className="form_cnt">
                <div className="form_header">
                    <div className="back_cnt">
                        <Link to="/">                    
                            <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                        </Link>
                    </div>
                    <h1>WELCOME!</h1>
                </div>
                <div className="form_body">
                    <div className="inputs">
                        <input name="email" type="text" placeholder="E-mail"/>
                        <input name="password" type="password" placeholder="Password"/>
                        <button type="submit" className="login_btn">LOG IN</button>
                    </div>
                    <Link to="/signup">
                        <button className="mainBottom_btn" type="button">NEW USER</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}