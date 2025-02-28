import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // hook para cambiar el estado
  const [datosTiempo, setDatosTiempo] = useState(null)

  // useEffect es un hook para asegurarse de que el componente no se renderizará
  // hasta que se ejecute todo el código Javascript del componente
  useEffect(() => { 
    // Petición fetch para recuperar datos del tiempo de Madrid
    // https://wttr.in/Madrid?format=j1
    fetch('https://wttr.in/Madrid?format=j1')
      .then(response => response.json())
      .then(datosWttr => {
        console.log("Resultado de la consulta de datos")
        console.log(datosWttr)
        setDatosTiempo(datosWttr)  // Actualizo el estado de 'datosTiempo'
      })
      .catch(error => console.log("Error ", error))

  })
  
  return (
    <>
      <div>
        <h1>El tiempo en Madrid</h1>
        <div>Temperatura: {datosTiempo?.current_condition[0]?.temp_C}</div>
        <div>Estado: {datosTiempo?.current_condition[0]?.lang_es[0].value}</div>
      </div>
    </>
  )
}

export default App
