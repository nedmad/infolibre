import produtos from "../json/Produtos.json";
import Carts from "../objects/Carts";

export default function Suplementos() {
  const produto = produtos.filter((val) => val.tipo === "saude");

  return (
    <>
      <Carts produto={produto} />
      
    </>
  );
}
