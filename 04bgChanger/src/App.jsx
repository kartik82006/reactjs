import React from 'react'
import {useState} from "react"

function App() {
  const [bgcolor,setbgColor] = useState("Olive")
  const colors  =["Red","Green","Yellow","Purple"]

  return (
    <>
    <div className='w-screen h-screen' style={{backgroundColor: bgcolor}}></div>
    <div className='fixed flex flex-wrap bottom-12 px-2 inset-x-0 justify-center'>
    <div className='flex-wrap gap-3  bg-blue-400 text-white rounded-2xl text-2xl flex'>
      {/* <button onClick={()=>setColor("red")} className="rounded-xl p-2 m-4 bg-red-500 shadow-xl">Button 1</button>
      <button className="rounded-xl p-2 m-4 bg-green-500 shadow-xl  " onClick={()=>setColor("green")}>Button 2</button>
      <button className="rounded-xl p-2 m-4 bg-yellow-500 shadow-xl " onClick={()=>setColor("yellow")}>Button 3</button>
      <button className="rounded-xl p-2 m-4 bg-purple-500 shadow-xl " onClick={()=>setColor("purple")}>Button 4</button> */}
  {
    colors.map((color,index)=>{
      return(
        <button  key={index} className={`rounded-xl flex justify-center p-2 m-4 bg-${color.toLowerCase()}-500 shadow-xl min-w-[10vw]`
         } onClick={()=>setbgColor(color.toLowerCase())}>{color}</button>
      );
    })
  }
    </div>
    </div>
    </>
  )
}

export default App