import styles from './Tema.module.css'
import { useState, useEffect, use } from "react"

function Tema() {

    // Caso 1: contador
    const [contador, setContador] = useState(0);

    // Caso 2: texto digitado pelo usuário
    const [nome, setNome] = useState("");
    // Caso 3: controle de tema
    const [temaEscuro, setTemaEscuro] = useState(false)
    // Casos de uso do useEffect

    // Caso 1: Executa apenas uma vez, ao carregar o componente
    useEffect(() => {

    }, []);
    // Caso 2: executa sempre que o contador mudar
    useEffect(() => {

    }, [contador]);
    // Caso 3: executa sempre que o tema mudar
    useEffect(() => {

    }, [temaEscuro]);
    
    // função pra aumentar contador
    function aumentarContador(){
        setContador(contador + 1)
    }
    // função pra aumentar contador
    function diminuirContador(){
        setContador(contador - 1)
    }
    // função pra aumentar contador
    function alternarTema(){
        
    }

    return(
        <>
           <main
           className={`${styles.container
    } ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>

        <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

        {/* Caso 1: Contador */}
        <section className={styles.card}>
        </section>

        {/* Caso 2: Campo de texto */}
        <section className={styles.card}>
        </section>

        {/* Caso 3: Alternância de tema */}
        <section className={styles.card}>
        </section>


           </main> 
        </>
    );
}

export default Tema