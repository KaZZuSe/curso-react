import { useState } from 'react'
import Boton from '../componentes/Boton.jsx';
import './App.css'

function App() {
  const [numClics, setNumClics] = useState(0)

const incrementar = () => {
  setNumClics(numClics + 1)
}

const reset = () => {
  setNumClics(0)
}

  return (
    <>
      <div className='contador'>  
        <p> {numClics} </p>
      </div>
      <Boton manejarClic={incrementar}>
        Sumar
      </Boton>
      <Boton manejarClic={reset}>
        Resetear
      </Boton>
    </>
  )
}

export default App
