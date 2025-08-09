import { useState } from 'react'
import './index.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="kartik gupta" description="This is a description of the card." />
      <h1 className='text-5xl bg-red-500'>Tailwind Test</h1>
    </>
  )
}

export default App
