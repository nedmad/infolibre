import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carts({ produto }) {
  function render(){
    useEffect(()=>{
      window.location.reload()
    },[])
  }
  let produtos = produto;
  return (
    <>
      <div className="container todosProdutos">
        <div data-aos="zoom-in-up" className="ProdutosMePro">
          {produtos.map((val) => (
            <Link
              onClick={render}
              to={`/mercadorias/${val.id}`}
              key={val.id}
              className="cartPai"
            >
              <div className="cart">
                <div
                className="imgCart"
                  style={{ backgroundImage: `url(${val.img})` }}
                ></div>
                <div className="cart-body">
                  <h5 className="cart-text">{val.nome}</h5>
                  <h3>R$ {val.desc ? val.desc : val.preco}</h3>
                  <span className="desconto">
                    {val.desc ? val.porcent + " de desconto" : ""}
                  </span>
                  <p>
                    R$<del>{val.preco}</del>
                  </p>
                  <p>{val.descricao}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
