import { Logo } from "./logo/Logo";
import { Menu } from "./menu/Menu";
import { Searcher } from "./searcher/Searcher";

export function Navbar (props) {

    return (
        <div className="navbar_cnt">

            <Logo />
            <Searcher showSearch={props.showSearch} searchIsActive={props.searchIsActive}/>
            <Menu/>

        </div>
    )
}