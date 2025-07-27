import './App.css'
import Hero from "./components/Hero.jsx";
import Nav from "./components/Navigation/Nav.jsx";

function App() {

  return (
    <div className="lg:px-20">
        <div className="py-4">
            <Nav/>
        </div>
        <Hero />
    </div>
  )
}

export default App
