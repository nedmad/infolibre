import { Link, Outlet, useLocation} from "react-router-dom";
import Rodape from "../components/Rodape";

export default function TodosProdutos() {
  const {pathname} = useLocation();
  return (
    <>
      <div className="caminhos">
        <Link
          to={"/mercadorias/todosProdutos"}
          className={pathname == "/mercadorias/todosProdutos" ? "selecionado" : ""}
        >
          <strong>Todos</strong>
        </Link>
        <Link
          to={"/mercadorias/produto"}
          className={pathname == "/mercadorias/produto" ? "selecionado" : ""}
        >
          <strong>Produtos</strong>
        </Link>
        <Link
          to={"/mercadorias/infoproduto"}
          className={pathname == "/mercadorias/infoproduto" ? "selecionado" : ""}
        >
          <strong>Infoprodutos</strong>
        </Link>
        <Link
          to={"/mercadorias/suplementos"}
          className={pathname == "/mercadorias/suplementos" ? "selecionado" : ""}
        >
          <strong>Saúde</strong>
        </Link>
      </div>
      <div className="conteudoFundo">
        <Outlet />
        <Rodape/>

      </div>
    </>
  );
}
