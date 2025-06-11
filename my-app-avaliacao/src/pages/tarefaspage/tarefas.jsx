import { Button } from "../../components/Button/button"
import { Input } from "../../components/Input/input"
import { Navbar } from "../../components/NavBar/navbar"
import style from "./tarefas.module.css"
import { useState } from "react";

export function Tarefas(){
    const [texto, setTexto] = useState('');
    const [itens, setItens] = useState([]);

    const adicionarTexto = () => {
        if (texto.trim() !== '') {
        setItens([...itens, texto]);
        setTexto('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        adicionarTexto();
        }
    };

    const handleLimpar = () => {
        setItens([])
        setTexto('')
    };

    return(
        <>
        <Navbar/>
            <div className={style.tarefasEdit}>
                <h1>Tarefas</h1>
            
            

            <div class={style.caixaComScroll}>
                {itens.map((item, index) => (
                <p key={index} style={{ margin: '4px 0' }}>
                    {item}
                </p>
                ))}
            </div>

            <Input
                type="text"
                placeholder="Digite sua tarefa..."
                onChange={(e) => setTexto(e.target.value)}
                value={texto}
                onKeyPress={handleKeyPress}
            />

            <div className={style.buttonEditavel}>
            <Button
                type="submit"
                onClick={adicionarTexto}
                title={'Adicionar'}
            />
            <Button
                type="submit"
                onClick={handleLimpar}
                title={'Limpar  tudo'}
            />
           </div>
        </div>
        </>
    )
}