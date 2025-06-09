import { useState } from 'react'
import './App.css'
import { Rotas } from "./Routes/Routes";

function App() {
  const [count, setCount] = useState(0)

   return <Rotas/>;
}

export default App
