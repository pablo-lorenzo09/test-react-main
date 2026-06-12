import styles from "./contador.module.css"
import { useState } from "react"

function Contador() {
    const [numero, setNumero] = useState(0);

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
        setNumero(Math.floor(Math.random() * 50))
    }
    return (
        
        <>
        
            <h1 style={{color: numero==0? 'blue' : numero > 0? 'green' : 'red'}}>{(numero > 0 && numero < 10) || (numero == 0) ?'0'+ numero : numero}</h1>

            <button onClick={zerarNumero}>↩</button>

            <button onClick={somarNumero}>+</button>

            <button onClick={subtrairNumero}>-</button>

            <button onClick={sortearNumero}>Sorteio</button>
        </>
    )
}

export default Contador

// 