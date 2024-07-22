import { createContext, useRef } from "react";

export const Contexts = createContext({});

export default function CreateQuiz({ children }) {
    let title = [
        "1- Você está insatisfeito com sua atual situação financeira e gostaria de encontrar uma maneira de ganhar mais dinheiro online?",
        "2- Você sente que precisa ficar rico o mais rápido possível? ",
        "3- Você gostaria de aprender as melhores estratégias para iniciar um negócio online de sucesso com zero investimento inicial?",
        "4- Você tem o desejo de aposentar seus pais e comprar sem ao menos olhar o preço? ",
        "5- Sente que precisa de orientação para evitar os erros comuns que muitos cometem ao tentar ganhar dinheiro online?",
        "6- Gostaria de saber como utilizar as redes sociais de forma eficaz para atrair clientes e aumentar suas vendas online?",
        "7- Acredita que uma formação estruturada e passo a passo pode acelerar significativamente seu sucesso financeiro online?",
        "8- Está pronto para dar o próximo passo e transformar seu tempo livre em uma oportunidade de negócio lucrativa através da internet?",
        "Se você chegou aqui, você faz parte dos 1% de 100%, então parabéns! A maioria não está disposta a fazer o que você faz para ter a vida dos sonhos. Você está a um passo de dar uma volta por cima na sua vida. Ah, e muito obrigado pela atenção, se veremos em breve!",
      ];

  const items = {title};

  return <Contexts.Provider value={items}>{children}</Contexts.Provider>
}
