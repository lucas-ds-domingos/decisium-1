import { Outlet } from "react-router-dom";
import  Sidebar  from "../sidebar/sidebar";

export function Layout() {

    return (
        <div>
            <Sidebar/>
            <Outlet/> 
        </div>
    );
}
