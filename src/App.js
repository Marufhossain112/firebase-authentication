import logo from "./logo.svg";
import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";
import { Form } from "react-bootstrap";
import Forms from "./Forms";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Login from "./components/Login";
const auth = getAuth(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Forms></Forms>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Forms></Forms>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
