// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { ReactDOM } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'

const root = document.getElementById("root");

// first way to make a router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }
    ]
  }
])

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);



