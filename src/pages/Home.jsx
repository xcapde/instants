import { List } from "../components/list/List";
import { NavbarTopMobile } from "../components/navbar/NavbarTopMobile";

export function Home () {
    return(
        <div className="home_pg">

            <NavbarTopMobile/>
            <List/>

        </div>
    )
}