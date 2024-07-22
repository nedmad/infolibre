import { useContext, useState } from "react"
import { Contexts } from "./CreateQuiz"



export default function HomeQuiz(){
    let {title} = useContext(Contexts);
    let [teste, setTeste] = useState(0);
    var [but, setBut] = useState('Proximo');
    function Soma(){
        setTeste(teste <=8?teste+1:9);
        if(teste == 7){
           setBut('Finalizar');

        }
        if(teste == 8){
           let a = document.querySelector(".but a");
           a.href = "https://pay.kiwify.com.br/4X4vX5q";

        }
    }
    return(
        <>
        <div className="container">
        <div className="quiz">
          <h2>Responda as perguntas e será redirecionado para a página de compra automaticamente</h2>
           
            <div className="questions">
              <h5>
                {title[teste]}
              </h5>
              {
                teste <= 7?
              <div className="perg">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    SIM
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    NÃO
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    TALVEZ
                  </label>
                </div>
              </div>
            :""}

            </div> {/*Fim questions */}

          <div className="but">
            <a onClick={Soma} className="btn ">
              {but}
            </a>
          </div>
        </div>

        {/*Fim quiz */}
      </div>
      </>
    )
}