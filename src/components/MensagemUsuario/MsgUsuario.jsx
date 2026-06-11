import styles from "./msgUsuario.module.css"

function MsgUsuario({autenticado=false, nomeUsuario}){
    // if (autenticado === true){
    //     return(     
    //             <h1>Bem-vindo {nomeUsuario}</h1>
    //         );
    // } else{
    //     return(
    //             <h1>Usuário não logado</h1>
    //         );
    // }

    return(autenticado ? <h1 className = {styles.autenticado}>Bem vindo, {nomeUsuario}</h1>:
        <h1 className={styles['nao-autenticado']}> Usuário nao logado </h1>
    )
}

export default MsgUsuario