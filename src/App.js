import "./App.css";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Testimonial from "./components/Testimonial";



function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Testimonial />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
 
}

export default App;
