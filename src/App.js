import logo from "./logo.svg";
import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";
const auth = getAuth(app);
function App() {
  const handleForm = (e) => {
    e.preventDefault();
    // console.log("I am handled");
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);
  };
  const emailOnchange = (e) => {
    console.log(e.target.value);
  };
  const emailOnchangeBlur = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleForm}>
        <input
          onBlur={emailOnchangeBlur}
          // onChange={emailOnchange}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <br />
        <input
          // onChange={emailOnchange}
          onBlur={emailOnchangeBlur}

          type="password"
          name="password"
          placeholder="Your password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// a comment
// just without any cli yeah
// we r back
export default App;
