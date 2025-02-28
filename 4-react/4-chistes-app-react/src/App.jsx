import { useState } from 'react'
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [chiste, setChiste] = useState({})

  const dameChiste = () => {
    // Petición fetch para recuperar datos de la API de chistes
    // https://v2.jokeapi.dev/joke/Any?lang=es
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
      .then(response => response.json())
      .then(resultadoChiste => {
        console.log("Resultado de la consulta de chistes")
        console.log(resultadoChiste)
        setChiste(resultadoChiste)  // Actualizo el estado de 'datosTiempo'
      })
      .catch(error => console.log("Error ", error))
  }

  return (
    <>
      <button onClick={dameChiste}>Cuéntame un chiste</button>
      <div>
        Chiste: { chiste.setup }
      </div>
      <div>
        { chiste.delivery }
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default App
