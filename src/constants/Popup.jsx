import "./Popup.scss";
import { motion } from "framer-motion";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <motion.div
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.25 }}
      >
        <div className="popup-inner imgProject">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            Close
          </button>
          {props.children}
        </div>
      </motion.div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
