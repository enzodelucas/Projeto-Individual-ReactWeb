import styles from "./home.module.css"
import { useNavigate } from "react-router-dom";

export function HomePage(){
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <ul className={styles.opcoesEdit}>
                <li onClick={() => navigate("/tema")}>Tema Claro/Escuro</li>
                <li>Mensagem de Boas-Vindas</li>
                <li>Lista de Tarefas</li>
            </ul>
        </div>
    )
}