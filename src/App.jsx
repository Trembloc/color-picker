import { useState } from 'react'
import './App.css'
import ColorButton from '../ColorButton.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>color picker</h1>
     <ColorButton colorName="red"/>
     <ColorButton colorName="blue"/>
     <ColorButton colorName="yellow"/>
    </>
  )
}

export default App
