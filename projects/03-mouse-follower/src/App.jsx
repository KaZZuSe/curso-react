import { useState, useEffect } from 'react'


function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efecto')
  })
  return (
    <>
      <h3>Proyecto 3</h3>
      <button>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

export default App
