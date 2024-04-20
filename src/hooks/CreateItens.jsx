import { createContext, useRef } from "react";

export const Context = createContext({});

export default function CreateItens({ children }) {
  const rodapeRef = useRef(null);
  const sobreRef = useRef(null);

  function scroll() {
    sobreRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scroll2() {
    rodapeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const items = { scroll, scroll2, rodapeRef, sobreRef};

  return <Context.Provider value={items}>{children}</Context.Provider>;
}
