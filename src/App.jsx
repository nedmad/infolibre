/*
import { RouterProvider } from "react-router-dom";
import { RouterMinho } from "./hooks/RouterMinho";
import CreateItens from "./hooks/CreateItens";
<CreateItens>
<RouterProvider router={RouterMinho} />
</CreateItens>
 */

import { RouterProvider } from "react-router-dom";
import { RouterQuiz } from "./quiz/RouterQuiz";
import CreateQuiz from "./quiz/CreateQuiz";

export default function App() {
  return (
    <>
      <CreateQuiz>
        <RouterProvider router={RouterQuiz} />
      </CreateQuiz>
    </>
  );
}
