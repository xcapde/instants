import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export function LogIn() {
    return(
        <section className="login_pg">
            <Navbar/>

            <div className="form_cnt">
                <div className="form_header">                    
                    <h1>WELCOME!</h1>
                </div>
                <div className="form_body">
                    <form className="inputs">
                        <input name="email" type="text" placeholder="E-mail" required autoFocus/>
                        <input name="password" type="password" placeholder="Password" required/>
                        <button type="submit" className="login_btn">LOG IN</button>
                    </form>
                    <Link to="/signup">
                        <button className="mainBottom_btn" type="button">NEW USER</button>
                    </Link>
                </div>
            </div>

        </section>
    )
}