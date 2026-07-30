import { useEffect, useState, UseState } from "react";
import styles from "./useEffectHook.module.css"

function useEffectHook(){

    const [contar, setContar] = useState(0);

    const titulo = 'Clicou '

    console.log('Sempre ocorre, mas antes do useEffect')

    useEffect(() => {
        console.log('Ocorre quando renderizar.')
    });

        useEffect(() => {
        console.log('Ocorre quando renderizar a primeira vez.')
    },[]);

        useEffect(() => {

    },[contar]);


    return <button 
    onClick={() => setContar(contar + 1)}>
    {contar}
    </button>

}



export default useEffectHook