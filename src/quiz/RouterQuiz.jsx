import { createHashRouter } from "react-router-dom";
import HomeQuiz from "./HomeQuiz";

export const RouterQuiz = createHashRouter([
    {
        path: "/",
        element: <HomeQuiz/>
    }
])