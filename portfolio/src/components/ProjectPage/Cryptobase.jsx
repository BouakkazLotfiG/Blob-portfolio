import "./Style.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";

function Cryptobase() {
  return (
    <header id="header" className="projectpage">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="overlay overlay-lg">
          <img src={images.square} className="shape square" alt="" />
          <img src={images.circle} className="shape circle" alt="" />

          <img src={images.halfcircle} className="shape half-circle1" alt="" />

          <img src={images.halfcircle} className="shape half-circle2" alt="" />
          <img src={images.x} className="shape xshape" alt="" />
          <img src={images.wave} className="shape wave wave1" alt="" />
          <img src={images.wave} className="shape wave wave2" alt="" />
          <img src={images.triangle} className="shape triangle" alt="" />

          <img src={images.points1} className="points points1" alt="" />
        </div>
      </motion.div>

      <div className="wrapper">
        <a href="/" className="btn"></a>
        <div className="box header">
          <h1>CryptoBase</h1>
        </div>
        <div className="box sidebar">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Pra
          </p>
        </div>
        <div className="box content">
          <img src={images.port1} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Cryptobase;
