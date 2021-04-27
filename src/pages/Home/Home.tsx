import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import HeaderMenu from "../../components/HeaderMenu";
import ReactAnimatedLogo from "../../components/ReactAnimatedLogo";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderMenu />
      <div className={style.content}>
        <AboutMe/>
        <ReactAnimatedLogo />
      </div>
    </React.Fragment>
  );
};

export default Home;
