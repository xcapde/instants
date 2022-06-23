import { Link } from "react-router-dom";


export function SignUp() {
    return(
        <section className="signup_pg">

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
                    <form className="inputs">
                        <div className="name_inputs">
                            <input name="name" type="text" placeholder="Name" autoFocus required/>
                            <input name="surname" type="text" placeholder="Surname" required/>
                        </div>
                        <input name="email" type="text" placeholder="E-mail" required/>
                        <input name="password" type="password" placeholder="Password" required/>
                        <button type="submit" className="singUp_btn">CREATE</button>
                    </form>
                </div>

            </div>


        </section>
    )
}