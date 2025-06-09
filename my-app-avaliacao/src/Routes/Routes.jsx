import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/home";
import { Tema } from "../pages/temapage/tema";


export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/tema" element={<Tema/>}/>
        </Routes>
    )

}
