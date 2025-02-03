import { useState } from 'react'
import './App.css'
import ColorButton from '../ColorButton.jsx';
import PickedColor from '../PickedColor.jsx';

function App() {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <>
      <PickedColor selectedColor={selectedColor}/>

      <h1>color picker</h1>
      <ColorButton colorName="red" setSelectedColor={setSelectedColor} />
      <ColorButton colorName="blue" setSelectedColor={setSelectedColor} />
      <ColorButton colorName="yellow" setSelectedColor={setSelectedColor} />

    </>
  )
}

export default App
