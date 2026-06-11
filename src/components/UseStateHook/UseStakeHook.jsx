import { useState } from "react"

function UseStateHook () {
    // 1. Inicializar  o estado
   const [nome, setNome] = useState('Clique em mudar.');
   const [idade, setIdade] = useState(0);
   const [eFalso, seteFalso] = useState(false)
    // 2. Atualizar o estado

    const atualizarNome = () =>{
        setNome('Pablo')
    }

    const atualizarIdade = () =>{
        setIdade(idade+1)
    }

    const verificarEstado = () => {
        seteFalso(!eFalso)
    }

    return(
        <div>
            <p>Nome:{nome}</p>
            <button onClick={atualizarNome}>mudar</button>

            <p>Idade:{idade}</p>
            <button onClick={atualizarIdade}>Incrementar</button>

            <p>É Falso: {eFalso ? 'NAO':'SIM'}</p>
            <button onClick={verificarEstado}>Verificar</button>
        </div>
    )
}

export default UseStateHook