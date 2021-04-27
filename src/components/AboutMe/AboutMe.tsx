import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomImage from "../CustomImage";
import style from "./AboutMe.module.scss";
function AboutMe() {
  const linkedinImg = "https://bit.ly/3dWvrIK";
  return (
    <div className={style.wrapper}>
      <CustomImage
        img={linkedinImg}
        altText="my photo"
        className={style.profileImg}
      ></CustomImage>
      <div>
        <span className={`${style.extLink} ${style.title}`}>
          Javier Picatoste Zangróniz
        </span>
        <span className={style.extLink}>
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/javier-picatoste/"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </span>
        <span className={style.extLink}>
          <FontAwesomeIcon icon={faGithub} />
          <a
            target="_blank"
            href="https://github.com/jpicatos/test-frontend-hv"
            rel="noreferrer"
          >
            This proyect code
          </a>
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
