import About from "./components/About";
import Mytopperformances from "./components/My-top-performances";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Myevents from "./components/My-events";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Myevents />
      <Mytopperformances />
    </div>
  );
}

export default App;
