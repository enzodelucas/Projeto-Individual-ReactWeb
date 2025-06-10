import { Button } from "../../components/Button/button"
import { Navbar } from "../../components/NavBar/navbar"
import styles from "./tema.module.css"

export function Tema(){
    return(
        <>
            <Navbar/>
            <div className={styles.fantasmaTema}></div>
            <div className={styles.buttonEditavel}>
                <Button
                    type="submit"
                    onClick={""}
                    title={'Teste'}
                />
            </div>
        </>
    )

}