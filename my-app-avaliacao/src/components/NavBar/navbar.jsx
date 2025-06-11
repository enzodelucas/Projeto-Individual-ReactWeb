import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();

    return(
        <nav className={styles.navbarEdit}>


            < i onClick={() => navigate("/")} class='bxr  bx-home-alt-2'  ></i> 
                

            <a href="https://www.linkedin.com/in/enzo-de-lucas-dias-de-oliveira-a7a822270" target="_blank"> 
                <img 
                    src="..\src\assets\eu.jpg" 
                    alt="eu"
                    className={styles.minhaFoto}/>
            </a>

        </nav>
    )
}