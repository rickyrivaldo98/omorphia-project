import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
