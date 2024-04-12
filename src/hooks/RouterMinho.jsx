import { createBrowserRouter } from "react-router-dom";
import TodosProdutos from "../page/TodosProdutos";
import Home from "../page/Home";
import PaginaTotal from "../page/PaginaTotal";
import Produtos from "../components/Produtos";
import Inforodutos from "../components/Infoproduto";
import Suplementos from "../components/Suplementos";
import PaginaInicialProdutos from "../components/PaginaInicialProdutos";
import PageProduto from "../objects/PageProduto";

export const RouterMinho = createBrowserRouter([
  {
    path: "/",
    element: <PaginaTotal />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mercadorias",
        element: <TodosProdutos />,
        children: [
          {
            path: "/mercadorias/todosProdutos",
            element: <PaginaInicialProdutos />,
          },
          {
            path: "/mercadorias/produto",
            element: <Produtos />,
          },
          {
            path: "/mercadorias/infoproduto",
            element: <Inforodutos />,
          },
          {
            path: "/mercadorias/suplementos",
            element: <Suplementos />,
          },
          {
            path: "/mercadorias/:id",
            element: <PageProduto/>,
          }
        ],
      },
    ],
  },
]);
