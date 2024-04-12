import produtos from "../json/Produtos.json";
import Carts from "../objects/Carts";

export default function PaginaInicialProdutos() {

  return (
    <>
    <Carts produto={produtos}/>
  </>
  );
}
