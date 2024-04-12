import produtos from "../json/Produtos.json";
import Carts from "../objects/Carts";

export default function Produtos() {
  const produto = produtos.filter((val)=> val.tipo === "produto")
  return (
    <>
      <Carts produto={produto} />
    </>
  );
}
