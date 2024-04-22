import { Link } from "react-router-dom";

export default function Carts({ produto }) {
  function render() {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  }
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });
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
                  <h3>R$ {val.preco}</h3>
                  <span className="desconto">
                    {val.desc ? val.desc + " de desconto" : ""}
                  </span>

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
