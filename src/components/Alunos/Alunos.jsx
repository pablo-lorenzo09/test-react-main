import styles from './alunos.module.css'

function Alunos(props) {
    return(
        <>
            <div className={styles.lista}>
                <p>Nome:{props.nome}</p>
                <p>Idade:{props.idade}</p>
                <p>Ativo:{props.ativo ? "SIM" : "NÃO"}</p>
            </div>
        </>
    )
}

export default Alunos