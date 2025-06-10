import styles from "./input.module.css"

export function Input(){
    return(
        <input 
            type="text"
            className={styles.inputEdit} />
    )
}