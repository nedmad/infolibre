import produtos from "../json/Produtos.json";
import Carts from "../objects/Carts";

export default function Suplementos() {
  const produto = produtos.filter((val) => val.tipo === "suplemento");

  return (
    <>
      <Carts produto={produto} />
      
    </>
  );
}
