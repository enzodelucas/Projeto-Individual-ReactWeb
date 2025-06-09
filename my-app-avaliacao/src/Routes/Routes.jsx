import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/home";
import { Tema } from "../pages/temapage/tema";
import { Mensagem } from "../pages/mensagempage/mensagem";
import { Tarefas } from "../pages/tarefaspage/tarefas";



export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/tema" element={<Tema/>}/>
            <Route path="/mensagem" element={<Mensagem/>}/>
            <Route path="/tarefas" element={<Tarefas/>}/>
        </Routes>
    )

}
