import styles from "./ContadorAuto.module.css"
import { useEffect, useState } from "react"

function ContadorAuto() {
    // 
    const [numero, setNumero] = useState(0);
    // 
    const [automatico, setAutomatico] = useState(false)
    // Efeito que monitroa o estado "automatico"
    useEffect(() => {
        
    }, [automatico]);

    const alternarAutomatico = () => {
        setAutomatico(!automatico);
    }

    const somarNumero = () =>{
        setNumero(numero + 1)
    }

    const subtrairNumero = () =>{
        setNumero(numero - 1)
    }

    const zerarNumero = () =>{
        setNumero(0)
    }

    const sortearNumero = () =>{
        setNumero(Math.floor(Math.random() * 100))
    }
    return (
        
        <>
        
            <h1 style={{color: numero==0? 'blue' : numero > 0? 'green' : 'red'}}>{(numero > 0 && numero < 10) || (numero == 0) ?'0'+ numero : numero}</h1>

            <button onClick={zerarNumero}>↩</button>

            <button onClick={somarNumero}>+</button>

            <button onClick={subtrairNumero}>-</button>

            <button onClick={sortearNumero}>Sorteio</button>

            <button >Automático</button>
        </>
    )
}

export default ContadorAuto
