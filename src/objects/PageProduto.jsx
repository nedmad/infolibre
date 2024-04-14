import Carts from "./Carts";
import produtos from "../json/Produtos.json";
import produtosDesconto from "../json/ProdutoDesconto.json";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function PageProduto() {
  const { pathname } = useLocation();
  const tudo = [...produtos, ...produtosDesconto];
  const conteudoPage = tudo.filter(
    (val) => `/mercadorias/${val.id}` == pathname
  );
  const produto = produtos.filter(
    (val) => val.tipo == conteudoPage[0].tipo && val.id != conteudoPage[0].id
  );
  const produtoOfertas = produtosDesconto.filter(
    (val) => val.nome == conteudoPage[0].nome && val.id != conteudoPage[0].id
  );
  const [image, setImage] = useState(conteudoPage[0].img);
  //func
  function alterarImage(imagem) {
    setImage(imagem);
  }

  const opImage = () => {
    const val = conteudoPage[0].img1;
    let element = [];
    if (!val) {
      element = [];
    } else {
      for (let i = 0; i < val.length; i++) {
        element.push(
          <div
            key={"ima"}
            style={{ backgroundImage: `url(${conteudoPage[0].img1[i]})` }}
            className="tagsI tagIgame1"
            onClick={() => alterarImage(conteudoPage[0].img1[i])}
          ></div>
        );
      }
    }
    return element;
  };

  return (
    <>
      <div className="container-fluid infoPageProduo">
        <div className="principal">
          <div className="imagem">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="img"
              onClick={() => alterarImage(conteudoPage[0].img)}
            ></div>

            <div className="barImage">
              <div className="tagImage">
                <div
                  style={{ backgroundImage: `url(${conteudoPage[0].img})` }}
                  className="tagsI tagIgame1"
                  onClick={() => alterarImage(conteudoPage[0].img)}
                ></div>
                {opImage()}
              </div>
            </div>
          </div>
          <div className="info">
            <hr />

            <h1>{conteudoPage[0].nome}</h1>
            <div className="texto">
              <p>{conteudoPage[0].conteudo}</p> <hr />
              <div className="demaisInfo">
                <span>indioma portugues</span>
                <span>380 paginas</span>
                <span>idade minima de 12 anos</span>
              </div>
            </div>
          </div>
          <div className="pagamento">
            <hr />
            <div className="contPagamento">
              <div className="infoPagamento">
                <h2>R$ {conteudoPage[0].preco}</h2>
                <p>Entrega GRÁTIS: 11 - 17 de Abril</p>
                <p>Em estoque</p>
              </div>
              <Link to={conteudoPage[0].link}
              target="_blank"
              >
                <button className="btn btn-success ">Ir para compra</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relacionados" id="relaci" >
          {produtoOfertas == 0 ? (
            ""
          ) : (
            <>
              <hr />

              <h3>Ofertas deste produto</h3>

              <div className="cardsRelacionadas">
                <Carts produto={produtoOfertas} />
              </div>
            </>
          )}
          {produto == 0 ? (
            ""
          ) : (
            <>
              <hr />
              <h3>Produtos relacionados a este item </h3>

              <div className="cardsRelacionadas">
                <Carts produto={produto} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
