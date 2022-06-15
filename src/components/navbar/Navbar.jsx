import { Logo } from "./logo/Logo";
import { Menu } from "./menu/Menu";

export function Navbar () {

    return (
        <div className="navigation_cnt">

            <Logo/>
            <Menu/>

        </div>
    )
}