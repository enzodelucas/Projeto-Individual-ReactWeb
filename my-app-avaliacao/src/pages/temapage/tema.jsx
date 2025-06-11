import { Navbar } from "../../components/NavBar/navbar"
import styles from "./tema.module.css"
import { useState } from "react";

export function Tema(){
    const [tema, setTema] = useState("Tema claro")
    const [mudarTema, setMudarTema] = useState("")

    function handletema () {
        if(tema === "Tema claro"){
            setMudarTema("backgroudColor: white;")
            setTema("Tema escuro")
        }else if(tema === "Tema escuro"){

            setTema("Tema Claro")
        }
    }

    return(
        <>
            <Navbar/>
            <div className={styles.body}>
                
            </div>
        </>
    )

}