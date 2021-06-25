import logo from "../../../logo.svg";
import style from "./ReactAnimatedLogo.module.scss";

const ReactAnimatedLogo = () => {
  return (
    <img src={logo} className={style.logo} alt="logo" data-testid="logo" />
  );
};

export default ReactAnimatedLogo;
