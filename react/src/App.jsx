import "./App.css";
import logo from "/logo.png";
import pana from "/pana.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <img className="logo" src={logo} alt="logo" />
      <img className="pana" src={pana} alt="landing Page Image" />
      <p>
        Manage <br />
        your <br /> Task with <br /> <a className="daytask">DayTask</a>
      </p>
      <Link to="login">
        <button>Let&apos;s Start </button>
      </Link>
    </main>
  );
}

export default App;
