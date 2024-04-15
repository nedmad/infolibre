import { Link } from "react-router-dom";

export default function Heade() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid " id="grupo">
            
              <Link to={"/"} className="navbar-brand logo" href="#">
                <img
                  src="../../public/images/infolibre_logo_insta.png"
                  alt=""
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon d-flex  align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </span>
              </button>
            <div
              className="collapse navbar-collapse "
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link active" aria-current="page" href="#">
                    <strong>Pagina Inicial</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#comoTrabalhamos">
                    <strong>Sobre nós</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rodape">
                    <strong>Contato</strong>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Mercadorias</strong>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/mercadorias/infoproduto"} className="dropdown-item" href="#">
                        <strong>Infoprodutos</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/mercadorias/produto"} className="dropdown-item" href="#">
                        <strong>Produtos</strong>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/mercadorias/suplementos"} className="dropdown-item" href="#">
                        <strong>Saúde</strong>
                      </Link>
                    </li>
                  
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
