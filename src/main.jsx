import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/ProjectPage.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Project /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
