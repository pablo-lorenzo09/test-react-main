import { useState, useEffect } from "react";
import Produto from "./Produto";

function Consulta() {

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    
  }, [produto]);

  function handleClick({ target }) {
  }

  return(
      <>    
          <h1>Preferência:</h1>
          <button>notebook</button> 
          <button>smartphone</button>
      </>
  )
}

export default Consulta