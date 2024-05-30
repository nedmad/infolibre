import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../hooks/CreateItens";
import instagram from "../../public/images/instagram.png"
import zap from "../../public/images/zap.png"
import tiktok from "../../public/images/tiktok.png"

export default function Rodape() {
  const { pathname } = useLocation();
  const url = pathname.split("/");
  //Se estiver no diretorio mercadoria, ele ira definir uma cor oposta 
  const color1 = url[1] == "mercadorias" ? "black" : "white";
  //useref para ir dereto para o rodape
  const {rodapeRef} = useContext(Context)
  return (
    <>
      <footer
      ref={rodapeRef}
        id="rodape"
        style={{color: `${color1}` }}
      >
        <div className="content">
          <div className="tags">
            <span>
            <h5>Termos</h5>
            <Link to={"/formas-pagamento"} style={{color:color1}}>
              <strong>Formas de Pagamentos</strong>
            </Link>


            <Link to={"/compra-devolução"} style={{color:color1}}>
              <strong>Compra e Devolução</strong>
            </Link>

            <Link to={"/termos-consentimento"} style={{color:color1}}>
              <strong>Termos de Consentimento</strong>
            </Link>

          

            
            </span>
          </div>
          <div className="redesSocias">
            <strong>Siga-nos em nossas redes socias</strong>
            <div className="imagensRede">
              <a href={"https://www.instagram.com/infolibre_market?igsh=MWppNHQzdHBoOHBwNw%3D%3D&utm_source=qr"} target="_blank">
                <img src={instagram} alt="" />
              </a>
              {/*
              <a href={""}>
                <img src={facebook} alt="" />
              </a>
               */}
              <a href={"https://wa.me/5593999018693"} target="_blank">
                <img src={zap}alt="" />
              </a>
              <a href={"https://www.tiktok.com/@femininabeauty?_t=8ljBh7hMQwo&_r=1"} target="_blank">
                <img src={tiktok} alt="" />
              </a>
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
