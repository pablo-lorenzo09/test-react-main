import { useState, useEffect } from "react";

const Produto = ({ produto }) => {

  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchProduto() {

      if (produto !== null) {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${produto}`
        );
        const json = await response.json();
        setDados(json);
      }
    }

    fetchProduto();
  }, [produto]);

  if (dados === null) return null;

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R${dados.preco}</p>
    </div>
  );
};

export default Produto;
