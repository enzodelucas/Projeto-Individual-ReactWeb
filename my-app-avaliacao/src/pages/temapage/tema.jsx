import { Navbar } from "../../components/NavBar/navbar"
import styles from "./tema.module.css"

export function Tema(){
    return(
        <>
            <Navbar/>
            <div className={styles.temaEdit}> 
                <button>mudar tema</button>
            </div>
        </>
    )

}