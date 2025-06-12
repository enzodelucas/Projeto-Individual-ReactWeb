import { useState } from "react";
import styles from "../temapage/tema.module.css";
import { Button } from "../../Components/Button/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/NavBar/navbar"

export function Tema() {
  const [claro, setClaro] = useState(true);
  const navigate = useNavigate();

  return (
    <>
        <Navbar/>
        <div
        className={`${styles.container} ${claro ? styles.claro : styles.escuro}`}
        >
        <div className={styles.buttonContainer}>
            <Button
            type="button"
            title={`Tema ${claro ? "Escuro" : "Claro"}`}
            onClick={() => setClaro(!claro)}
            className={styles.button}
            />

        </div>
        </div>
    </>
  );
}