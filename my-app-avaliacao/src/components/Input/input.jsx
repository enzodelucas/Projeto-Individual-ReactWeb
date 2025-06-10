import styles from "./input.module.css"

export function Input({type, placeholder,onChange}){
    return(
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={styles.inputStyle}
        />
    )
}