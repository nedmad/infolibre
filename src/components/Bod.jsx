import { Link } from "react-router-dom";
import ImgFundo from "../..//public/images/fundo.jpg";
import click from "../../public/images/icon/click.png"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import produto from "../json/Produtos.json";
export default function Bod() {
  const carrocel = useRef();
  const [width, setWidth] = useState(0);
  //ele vai calcular do scroll com o tamaho maximo div carosel
  useEffect(() => {
    setWidth(carrocel.current.scrollWidth - carrocel.current.offsetWidth);
  }, []);
  function aler(){
    alert(1)
  }
 
  return (
    <>
      <div className="corpo" style={{ backgroundImage: `url(${ImgFundo})` }}>
        <div className="filtro">
          <div className="conteudo">
            <motion.div
              ref={carrocel}
              className="carosel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
              

                {produto.map((val) => (
                  <motion.div
                    className="item"
                    alt="texto alr"
                    
                    key={val.id}
                  >
                    <div className="cart">
                      <img
                      src={val.img}
                        
                      />
                     <div className="cart-body" >
                        <h5 className="cart-text">{val.nome}</h5>
                        <h3>R$ {val.preco}</h3>
                        <div>
                          <del className="precoAntigo">{val.precoAntigo}</del>
                        </div>
                        <span className="desconto">
                          {val.desc ? val.desc + " de desconto" : ""}
                        </span>

                        <p>{val.descricao}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <div className="but">
              <Link to={"/mercadorias/todosProdutos"}>
                <button className="btn btn-light ">
                  Ver todos os produtos
                  <img src={click} alt="" />

                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
