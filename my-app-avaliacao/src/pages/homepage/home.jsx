import { Navbar } from "../../components/NavBar/navbar";
import styles from "./home.module.css"
import { useNavigate } from "react-router-dom";

export function HomePage(){
    const navigate = useNavigate();

    return(
        <>
        <Navbar/>
        <div className={styles.container}>
            
            <ul className={styles.opcoesEdit}>
                <li onClick={() => navigate("/tema")}>Tema Claro/Escuro</li>
                <li onClick={() => navigate("/mensagem")}>Mensagem de Boas-Vindas</li>
                <li onClick={() => navigate("/tarefas")}>Lista de Tarefas</li>
            </ul>
        </div>
        </>
    )
}