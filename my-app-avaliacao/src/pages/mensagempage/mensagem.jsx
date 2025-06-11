import { Button } from "../../components/Button/button"
import { Navbar } from "../../components/NavBar/navbar"
import style from "./mensagem.module.css"
import { useState } from "react";

export function Mensagem(){
   const [texto, setTexto] = useState("Ola Mundo!")
   const [textoButt, setTextobutt] = useState("Entrar")

    function handleButtonEntrar() {
        if(textoButt === "Entrar"){
            setTexto("Bem vindo")
            setTextobutt("Sair")
        }else if(textoButt === "Sair"){
            setTexto("Ola Mundo")
            setTextobutt("Entrar")
        }
    }
    

    return(
        <>
        <Navbar/>
        <div className={style.mensagemContainer}>
            <div className={style.boxMaior}>
                <div className={style.boxMenor}>
                    <h1>{texto}</h1>
                </div>
                
                <Button
                    className={style.botaoMessage}
                    type="submit"
                    onClick={handleButtonEntrar}
                    title={textoButt}
                />
            </div>
        </div>
        </>
    )
}