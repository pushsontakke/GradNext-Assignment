import './App.css'
import Hero from "./components/Hero_Section/Hero.jsx";
import Nav from "./components/Navigation/Nav.jsx";
import SwiperComponent from "./components/Swiper/Swiper.jsx";
import Features from "./components/Features/Features.jsx";

function App() {

  return (
    <div className="lg:px-20">
        <div className="py-4">
            <Nav/>
        </div>
        <Hero />
        <SwiperComponent/>
        <Features/>
    </div>
  )
}

export default App
