import styles from './button.module.css'

function Button(props) {
    return(
        <>
            <button>{props.texto}</button>
        </>
    )
}

export default Button