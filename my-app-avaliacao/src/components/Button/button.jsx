import styles from "./button.module.css"

export function Button({type, onClick, title}){
    return(
            <button
                className={styles.buttonEdit}
                type={type}
                onClick={onClick}
            >
                {title}
            </button>
        )
}