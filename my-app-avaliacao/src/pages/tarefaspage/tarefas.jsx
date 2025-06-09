import { Navbar } from "../../components/NavBar/navbar"
import style from "./tarefas.module.css"

export function Tarefas(){
    return(
        <>
        <Navbar/>
        <div className={style.tarefasEdit}>
            <h2>Tarefas</h2>

        </div>
        </>
    )
}