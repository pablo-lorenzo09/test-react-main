import styles from './Tema.module.css'
import { useState, useEffect, use } from "react"

function Tema() {

    // Caso 1: contador
    const [contador, setContador] = useState(0);

    // Caso 2: texto digitado pelo usuário
    const [nome, setNome] = useState("visitante");
    // Caso 3: controle de tema
    const [temaEscuro, setTemaEscuro] = useState(false)
    // Casos de uso do useEffect

    // Caso 1: Executa apenas uma vez, ao carregar o componente
    useEffect(() => {
        console.log("Componente carregado pela primeira vez")
    }, []);
    // Caso 2: executa sempre que o contador mudar
    useEffect(() => {
        console.log("O contador foi alterado para", contador);
    }, [contador]);
    // Caso 3: executa sempre que o tema mudar
    useEffect(() => {
        console.log("Tema alterado:", temaEscuro ? "Escuro" : "Claro")
    }, [temaEscuro]);
    
    // função pra aumentar contador
    function aumentarContador(){
        setContador(contador + 1)
    }
    // função pra diminuir contador
    function diminuirContador(){
        setContador(contador - 1)
    }
    // função pra alterar tema
    function alternarTema(){
        setTemaEscuro(!temaEscuro)
    }

    return(
        <>
           <main
           className={`${
            styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>

        <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

        {/* Caso 1: Contador */}
        <section className={styles.card}>
            <h1>Contador</h1>
            <p className={styles.valor}>{contador}</p>
            <div className={styles.botoes}>
                <button onClick={aumentarContador}>+</button>
                <button onClick={diminuirContador}>-</button>
            </div>
            
            <p>O useEffect observa a variável <strong>contador</strong> e executa sempre que ela muda.</p>

        </section>

        {/* Caso 2: Campo de texto */}
        <section className={styles.card}>
            <h1>Campo de texto (useState)</h1>
            <input 
            className={styles.input} 
            type="text" 
            name="" 
            id="input_nome" 
            placeholder='Digite seu nome' 
            onInput={() => {setNome(document.getElementById("input_nome").value)}}/>
            <p>Olá, <strong>{nome}!</strong></p>
        </section>

        {/* Caso 3: Alternância de tema */}
        <section className={styles.card}>
            <h1>3. Alternância de tema (useState)</h1>
            <div className={styles.botoes}>
                <button onClick={alternarTema}>Alternar para tema {temaEscuro ? "Claro" : "Escuro"}</button>
            </div>
            <p>o useEffect observa a variável <strong>temaEscuro</strong> e executa sempre que o tema é alterado.</p>
        </section>

            
           </main> 
        </>
    );
}

export default Tema