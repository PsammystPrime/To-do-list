import "./App.css";
import logo from "/logo.png";
import pana from "/pana.jpg";

function App() {
  return (
    <main>
      <img className="logo" src={logo} alt="logo" />
      <img className="pana" src={pana} alt="landing Page Image" />
      <p>
        Manage <br />
        your <br /> Task with <br /> <a className="daytask">DayTask</a>
      </p>
      <button>Let's Start</button>
    </main>
  );
}

export default App;
