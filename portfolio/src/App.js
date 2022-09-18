import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Dev from "./components/Dev/Dev";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Records from "./components/Records/Records";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <Dev />
      <About />
      <Records />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
