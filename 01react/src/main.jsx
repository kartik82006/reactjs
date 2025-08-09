import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit site'
)

createRoot(document.getElementById('root')).render(

  ReactElement

)
