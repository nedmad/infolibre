import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../hooks/CreateItens";

export default function Rodape() {
  const { pathname } = useLocation();
  const url = pathname.split("/");
  const color = url[1] == "mercadorias" ? "white" : "rgb(47, 0, 255)";
  const color1 = url[1] == "mercadorias" ? "rgb(47, 0, 255)" : "white";
  const {rodapeRef} = useContext(Context);
  return (
    <>
      <footer
        id="rodape"
        style={{ backgroundColor: `${color}`, color: `${color1}` }}
        ref={rodapeRef}
      >
        <div className="content">
          <div className="tags">
            <span>
            <h5>Termos</h5>
            <Link to={"/formas-pagamento"}>
              <strong>Formas de Pagamentos</strong>
            </Link>


            <Link to={"/compra-devolução"}>
              <strong>Compra e Devolução</strong>
            </Link>

            <Link to={"/termos-consentimento"}>
              <strong>Termos de Consentimento</strong>
            </Link>

          

            
            </span>
          </div>
          <div className="redesSocias">
            <strong>Siga-nos em nossas redes socias</strong>
            <div className="imagensRede">
              <Link to={""}>
                <img src="../../public/images/instagram.png" alt="" />
              </Link>
              <Link to={""}>
                <img src="../../public/images/facebook.png" alt="" />
              </Link>
              <Link to={""}>
                <img src="../../public/images/zap.png" alt="" />
              </Link>
              <Link to={""}>
                <img src="../../public/images/tiktok.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="creditos">
          <hr />© 2023 Monetizze Impulsionadora de Vendas Online -
          23.055.665/0001-06. Belo Horizonte - MG.
        </div>
      </footer>
    </>
  );
}
