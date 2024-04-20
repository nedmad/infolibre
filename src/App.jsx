import { RouterProvider } from "react-router-dom";
import { RouterMinho } from "./hooks/RouterMinho";
import CreateItens from "./hooks/CreateItens";

export default function App() {
  return (
    <>
      <CreateItens>
        <RouterProvider router={RouterMinho} />
      </CreateItens>
    </>
  );
}
