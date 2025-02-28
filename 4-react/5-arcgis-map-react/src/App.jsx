import { useState } from 'react'
import './App.css'
import "@arcgis/map-components/dist/components/arcgis-map"
import "@arcgis/map-components/dist/components/arcgis-zoom"
import "@arcgis/map-components/dist/components/arcgis-search"

function App() {

  return (
    <>
      <arcgis-map
        itemId="d5dda743788a4b0688fe48f43ae7beb9"
      >
        <arcgis-zoom position="top-right"></arcgis-zoom>
        <arcgis-search position="top-left"></arcgis-search>
      </arcgis-map>
    </>
  )
}

export default App
