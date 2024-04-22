import {createHashRouter } from "react-router-dom";
import TodosProdutos from "../page/TodosProdutos";
import Home from "../page/Home";
import PaginaTotal from "../page/PaginaTotal";
import Produtos from "../components/Produtos";
import Inforodutos from "../components/Infoproduto";
import PaginaInicialProdutos from "../components/PaginaInicialProdutos";
import PageProduto from "../objects/PageProduto";
import CompraDe from "../components/politicas/CompraDe";
import Consentimento from "../components/politicas/Consentimento";
import FormaPagamento from "../components/politicas/FormaPagamento";

export const RouterMinho = createHashRouter([
  {
    path: "/",
    element: <PaginaTotal />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/compra-devolução",
        element: <CompraDe />,
      },
      {
        path: "/termos-consentimento",
        element: <Consentimento />,
      },
      {
        path: "/formas-pagamento",
        element: <FormaPagamento />,
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
            path: "/mercadorias/:id",
            element: <PageProduto />,
          },
        ],
      },
    ],
  },
]);
