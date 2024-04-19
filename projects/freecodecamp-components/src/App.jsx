import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Testimonio from '../componentes/Testimonio.jsx'

function App() {
  return (
    <div className='App'>
    <h1>Practica componentes</h1>
    <Testimonio
    nombre='Alex'
    cargo='Frontend Developer'
    bio='Soy un frontend developer'
    ciudad='Madrid'
    foto='https://randomuser.me/api/portraits/men/32.jpg'
    />
    <Testimonio
    nombre='Alex'
    cargo='Frontend Developer'
    bio='Soy un frontend developer'
    ciudad='Madrid'
    foto='https://randomuser.me/api/portraits/men/32.jpg'
    />
    </div>

  )
}

export default App
