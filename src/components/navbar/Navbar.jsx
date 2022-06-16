import { Logo } from "./logo/Logo";
import { Menu } from "./menu/Menu";
import { Searcher } from "./searcher/Searcher";

export function Navbar () {

    return (
        <div className="navbar_cnt">

            <Logo/>
            <Searcher/>
            <Menu/>

        </div>
    )
}