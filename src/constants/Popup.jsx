import "./Popup.scss";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <motion.div
        whileInView={{ scale: [0.9, 1] }}
        transition={{ duration: 0.25 }}
      >
        <div className="popup-inner imgProject">
          <a className="close-btn" onClick={() => props.setTrigger(false)}>
            <AiFillCloseCircle size={30} />
          </a>
          {props.children}
        </div>
      </motion.div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
