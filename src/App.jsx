import { RouterProvider } from "react-router-dom";
import { RouterMinho } from "./hooks/RouterMinho";

export default function App(){
  return(
    <>
  
    <RouterProvider router={RouterMinho}/>

    </>
  )
}