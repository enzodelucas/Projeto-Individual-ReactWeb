import { Button } from "../../components/Button/button"
import { Input } from "../../components/Input/input"
import { Navbar } from "../../components/NavBar/navbar"
import style from "./tarefas.module.css"

export function Tarefas(){
    return(
        <>
        <Navbar/>
            <div className={style.tarefasEdit}>
                <h1>Tarefas</h1>
            
            

            <div class={style.caixaComScroll}>
                <p>Conteúdo linha 1</p>
                <p>Conteúdo linha 2</p>
                <p>Conteúdo linha 3</p>
                <p>Conteúdo linha 4</p>
                <p>Conteúdo linha 5</p>
                <p>Conteúdo linha 6</p>
                <p>Conteúdo linha 7</p>
                <p>Conteúdo linha 8</p>
                <p>Conteúdo linha 9</p>
                <p>Conteúdo linha 10</p>
                <p>Conteúdo linha 11</p>
                <p>Conteúdo linha 12</p>
                <p>Conteúdo linha 13</p>
                <p>Conteúdo linha 14</p>
                <p>Conteúdo linha 15</p>
                <p>Conteúdo linha 16</p>
                <p>Conteúdo linha 17</p>
            </div>

            <Input/>
            <div className={style.buttonEditavel}>
            <Button
                type="submit"
                onClick={""}
                title={'Adicionar'}
            />
            <Button
                type="submit"
                onClick={""}
                title={'Limpar  tudo'}
            />
           </div>
        </div>
        </>
    )
}