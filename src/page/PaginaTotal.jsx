import { Outlet } from "react-router-dom";
import Heade from "../components/heade";

export default function PaginaTotal(){
    return(
        <>
        <Heade/>
        <Outlet/>
        </>
    )
}