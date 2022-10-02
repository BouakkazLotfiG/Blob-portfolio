import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

function CarPopup({ work }) {
  // console.log(work[0].id);
  return (
    <>
      <h1>{work[0].name}</h1>
      <p>{work[0].desc}</p>
      <img src={work[0].imgUrl} alt="" />
      <div className="social-links-popup links">
        <div>
          <a
            href={work[0].codeLink}
            className="social-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div>
          <a
            href={work[0].projectLink}
            className="social-item"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillEye size={30} />
          </a>
        </div>
      </div>
    </>
  );
}

export default CarPopup;
