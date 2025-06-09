import { Navbar } from "../../components/NavBar/navbar"
import style from "./mensagem.module.css"

export function Mensagem(){
    return(
        <>
        <Navbar/>
        <div className={style.mensagemEdit}>
            <h2>bem vindo</h2>

        </div>
        </>
    )
}