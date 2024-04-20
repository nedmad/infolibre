import produtos from "../json/Produtos.json";
import Carts from "../objects/Carts";

export default function Inforodutos() {
  const produto = produtos.filter((val) => val.tipo === "info");

  return (
    <>
      <Carts produto={produto} />
    </>
  );
}
