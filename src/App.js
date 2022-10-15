import logo from "./logo.svg";
import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";
import { Form } from "react-bootstrap";
import Forms from "./Forms";
const auth = getAuth(app);
function App() {
  const handleForm = (e) => {
    e.preventDefault();
    // console.log("I am handled");
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);
  };

  return (
    <div>
      <Forms></Forms>
    </div>
  );
}
export default App;
