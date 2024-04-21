import { createContext, useRef } from "react";

export const Context = createContext({});

export default function CreateItens({ children }) {
  const rodapeRef = useRef(null);
  const sobreRef = useRef(null);
  const inicioRef = useRef(null);

  function scroll() {
    sobreRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scroll2() {
    rodapeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scroll3() {
    inicioRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const items = { scroll, scroll2,scroll3, rodapeRef, sobreRef, inicioRef};

  return <Context.Provider value={items}>{children}</Context.Provider>;
}
