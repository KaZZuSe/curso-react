import { useState } from 'react'
import Boton from '../componentes/Boton.jsx'
import Pantalla from '../componentes/Pantalla.jsx'
import { evaluate } from 'mathjs';
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const agregarInput = val => {
    setInput(input + val);
  }
  const calcularResultado = () => {
    if (input) {
      try {
        setInput(evaluate(input))
      } catch (error) {
        alert('Por favor ingresa una expresión válida')
      }
    } else {
      alert('Por favor ingresa valores')
    }
  }
  
  const clearInput = () => {
    setInput('')
  }
  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={clearInput}>
            Clear
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default App
