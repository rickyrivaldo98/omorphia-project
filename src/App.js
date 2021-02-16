import "./App.css";
import Hero from "./components/Hero";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
