import { Link } from "react-router-dom";
import ImgFundo from "../..//public/images/fundo.png"

export default function Bod() {
  return (
    <>
      <div className="corpo" style={{backgroundImage: `url(${ImgFundo})`
      }}>
        <div className="filtro">
          <div>
            <h1>
              Conquiste cada momento com confiança usando nossos produtos de
              bem-estar e saúde.
            </h1>
            <span>
              Conquiste o sucesso nas compras online com a marca pioneira do
              mercado.
            </span>
            <div className="but">
              <Link to={"/mercadorias/todosProdutos"}>
                <button className="btn btn-light ">
                  Ver todos os produtos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
