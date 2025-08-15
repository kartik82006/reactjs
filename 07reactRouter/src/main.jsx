// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);



