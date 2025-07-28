import './App.css'
import Hero from "./components/Hero_Section/Hero.jsx";
import Nav from "./components/Navigation/Nav.jsx";
import Features from "./components/Features/Features.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";

function App() {

  return (
    <div className="lg:px-20">
        <div className="py-4">
            <Nav/>
        </div>
        <Hero />
        <Features/>
        <Testimonials/>
    </div>
  )
}

export default App
