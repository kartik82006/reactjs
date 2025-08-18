import ReactDOM from "react-dom/client";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import {About,Contact} from "./imports.js"; // Importing components from imports.js
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <App /> },   // Home page at "/"
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      
    ],
  },
]);

// use the below approach only when not using createBrowserRouter

// const router = createBrowserRouter([
//   <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<App />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   </Routes>
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
