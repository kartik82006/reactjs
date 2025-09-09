import React from 'react'
import process from  'process';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <div>
        <h1>Welcome to the Blog</h1>
      </div>
    </>
  )
}

export default App
