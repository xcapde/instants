import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Searcher } from "./Searcher";

export function Navbar () {

    return (
        <div className="navbar_cnt">

            <Logo />
            <Searcher/>
            <Menu/>

        </div>
    )
}