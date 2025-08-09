import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15)

  
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter App: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>Add Value</button>
      <br />
      <button onClick={() => setCounter(counter - 1)}>Decrease Value</button>
    </>
  )
}

export default App;