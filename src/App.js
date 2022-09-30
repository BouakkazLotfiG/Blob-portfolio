import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Dev from "./components/Dev/Dev";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Records from "./components/Records/Records";
import Services from "./components/Services/Services";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="app">
          <ClimbingBoxLoader color="#FF0066" loading={loading} size={15} />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Hero />
          <Services />
          <Dev />
          <About />
          <Records />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
