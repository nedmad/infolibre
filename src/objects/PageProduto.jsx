import Carts from "./Carts";
import produtos from "../json/Produtos.json";
import produtosDesconto from "../json/ProdutoDesconto.json";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../hooks/CreateItens";

export default function PageProduto() {
  //pega localizacao da pagina atual
  const { pathname } = useLocation();
  const tudo = [...produtos, ...produtosDesconto];
  //filtra conteudo pelo o id
  const conteudoPage = tudo.filter(
    (val) => `/mercadorias/${val.id}` == pathname
  );
  //filtra produtos pelo o tipo, que nao seja do mesmo id da pagina
  const produto = produtos.filter(
    (val) => val.tipo == conteudoPage[0].tipo && val.id != conteudoPage[0].id
  );
  //filtra produtos pelo o nome, que nao seja do mesmo id
  const produtoOfertas = produtosDesconto.filter(
    (val) => val.nome == conteudoPage[0].nome && val.id != conteudoPage[0].id
  );
  //setar imagem de a ser usado na pagina daquele produto
  //func altera a imagem principal para a escolhida
  const [image, setImage] = useState(conteudoPage[0].img);
  //para armazendar o id do diretorio
  const [idAnterior, setIdAnterior] = useState("");

  function alterarImage(imagem) {
    setImage(imagem);
    setIdAnterior(conteudoPage[0].id);
  }
  //verifica qauntas diversidades de imagem tem do mesmo produto
  //e pega todas a imagens deversa daquele produto e faz um push no element
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
  //ref
  const { inicioRef } = useContext(Context);
  return (
    <>
      <div className="container-fluid infoPageProduo" ref={inicioRef}>
        <div className="principal">
          <div className="imagem">
            {/*se o id atual foi igual ao id armazenado, ele retorna imagem ja setada,
             caso nao, ele coloca a imagem inicial do id pertecente */}
            <div
              style={{
                backgroundImage: `url(${
                  conteudoPage[0].id == idAnterior ? image : conteudoPage[0].img
                })`,
              }}
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
                {/*retorna todas as imagens obetidas pela funcao */}
                {opImage()}
              </div>
            </div>
          </div>
          <div className="info">
            <hr />

            <h1>{conteudoPage[0].nome}</h1>
            <div className="texto">
              <hr />
              <p>{conteudoPage[0].conteudo}</p>
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
              <Link to={conteudoPage[0].link} target="_blank">
                <button className="btn btn-success ">Ir para compra</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relacionados" id="relaci">
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
