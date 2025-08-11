import { useState ,useCallback} from 'react'


function App() {
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password,setPassword] = useState('');
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeNumbers) str += "0123456789"
    if(includeSymbols) str += "!@#$%^&*(){}[];:,.<>?/~`"
    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,includeNumbers,includeSymbols,setPassword]);
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-xl rounded-xl m-8 px-4 m-2 text-orange-500 bg-gray-800">
       <h1 className='text-4xl text-center text-white'>
         Password Generator
       </h1>
       <input type="text" value={password} readOnly className='outline-none my-3 w-full p-2 border-b-2 border-orange-500 rounded-xl bg-gray-900 text-white' />
     </div>
       <button

        className='flex outline-none bg-blue-700 text-white rounded-xl m-2 px-3 py-0.5 shrink-0'
        >copy</button>
        <input className='flex m-2 p-4' type="range" min="4" max="20" value={length} onChange={(e) => setLength(e.target.value)} />
        <label className="flex text-white m-2 p-4" htmlFor="">Length:{length}</label>
    </>
  )
}

export default App
