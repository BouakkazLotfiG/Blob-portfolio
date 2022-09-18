import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Records from "./components/Records/Records";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Records />
      <Contact />
    </div>
  );
}

export default App;
