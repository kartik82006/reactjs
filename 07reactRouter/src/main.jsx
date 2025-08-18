import ReactDOM from "react-dom/client";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import {About,Contact, User,Github,getGithubData} from "./imports.js"; // Importing components from imports.js
import App from "./App.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <App /> }, 
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user/:userid", element: <User /> },
      { path: "github", element: <Github />, loader: getGithubData }
    ],
  },
]);

// use the below approach for easier projects

// const router = createBrowserRouter(
//   createRoutesFromElements(
  
//     <Route path="/" element={<Layout />}>
//       <Route index element={<App />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
