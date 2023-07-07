import End from "./components/End";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <header className="bg-[#212529] h-[500px]">
        <Navigation />
        <Home />
      </header>

      <About />
      <Pricing />
      <Contact />
      <End />

    </div>

  )
}