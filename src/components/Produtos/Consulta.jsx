import { useState, useEffect } from "react";
import Produto from "./Produto";

function Consulta() {
// Estado que vai controlar a renderização do produto na UI
  const [produto, setProduto] = useState(null);
// Inserir o produto no Local Storage
  useEffect(() => {
  const produtoLocal = localStorage.getItem('produto');
  if (produtoLocal !== 'null') setProduto(produtoLocal)
  }, []);
// Recuperar o produto do Local Storage quando o produto for modificado pelo estado
  useEffect(() => {
    if (produto !== null) localStorage.setItem('produto', produto);
  }, [produto]);
// Extrair o texto do Botão quando o usuário clicar
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <section>
      <h1>Preferência:{produto}</h1>
      <button onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>
        smartphone
      </button>
      <Produto produto={produto}/>
    </section>
  );
}

export default Consulta;