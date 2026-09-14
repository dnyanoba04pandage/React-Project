import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

//let counts=15
  const addValue=()=>{
    console.log("value added",count)
    
    setCount(count+1)
    if(count>20){
      setCount(15)
    }
  }

  const removeValue=()=>{
    setCount(count-1)
    if(count<0){
      setCount(0)
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <br/>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value {count}</button>
      <br/>
      <button onClick={removeValue}>decrease value {count}</button>
      <p>Footer {count}</p>


      
    </>
  )
}

export default App
