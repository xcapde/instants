import { Link } from "react-router-dom";


export function SignIn() {
    return(
        <div className="signin_pg">

            <div className="form_cnt">
                <div className="form_header">
                    <div className="back_cnt">
                        <Link to="/login">                    
                            <button className="back_btn"><i className="fa-solid fa-arrow-left"></i></button>
                        </Link>
                    </div>
                    <h1>CREATE AN ACCOUNT</h1>
                </div>
                <div className="form_body">
                    <div className="inputs">
                        <div className="name_inputs">
                            <input name="name" type="text" placeholder="Name"/>
                            <input name="surname" type="text" placeholder="Surname"/>
                        </div>
                        <input name="email" type="text" placeholder="E-mail"/>
                        <input name="password" type="password" placeholder="Password"/>
                        <button type="submit" className="sigin_btn">CREATE</button>
                    </div>
                </div>

            </div>


        </div>
    )
}