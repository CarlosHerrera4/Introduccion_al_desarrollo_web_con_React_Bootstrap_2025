// Importamos los módulos de ReactDOM y React
import ReactDom from 'https://esm.sh/react-dom@19.0.0/client'
import React from 'https://esm.sh/react@19.0.0/'

const elementoApp = document.getElementById('app') // REcuperamos elemento 'app'
const root = ReactDom.createRoot(elementoApp)  // Creamos raíz de React

// Creamos botón con iteractividad con React
const button = React.createElement('button', {onClick: () => {
    alert("Hola Mundoadfas!")
} }, 'Haz clic')

// Renderizamos el botón creado en la raíz
root.render(button)