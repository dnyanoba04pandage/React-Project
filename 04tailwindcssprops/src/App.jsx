import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-2">tailwind css</h1>
      <Card username="Card 1 Chai" btntext="Read More" />
      <Card username="Card 2 Chai" btntext="Learn More" />

      
























        {/*
          <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/37442929/pexels-photo-37442929.jpeg" />
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-medium">Class Warfare</span>
            <span className="font-medium text-sky-500">The Anti-Patterns</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
              <span>No. 4</span>
              <span>·</span>
              <span>2025</span>
            </span>
          </div>
        */}
      
    </>
  )
}

export default App
