import {useLocation, Link} from "react-router-dom";


export default function Rodape() {
  const {pathname} = useLocation();
  const url = pathname.split("/")
  const color = url[1] == "mercadorias"?"white":"rgb(47, 0, 255)";
  const color1 = url[1] == "mercadorias"?"rgb(47, 0, 255)":"white";
  return (
    <>
      <footer id="rodape" style={{backgroundColor: `${color}`, color: `${color1}`}}>
        <div className="content" >
          <div className="tags">
            <strong>Sobre</strong>
            <p>remedios ds dsds dsds d</p>
            <p>suplementos sdsdsddsdsdsd</p>
            <p>produtos sddsdsdsdsd</p>
            <p>info sdsdsdsd</p>
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
          <hr />
          © 2023 Monetizze Impulsionadora de Vendas Online - 23.055.665/0001-06.
          Belo Horizonte - MG.
        </div>
      </footer>
    </>
  );
}
