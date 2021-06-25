import React from "react";
import AboutMe from "../../components/utils/AboutMe";
import HeaderMenu from "../../components/utils/HeaderMenu";
import ReactAnimatedLogo from "../../components/utils/ReactAnimatedLogo";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderMenu activePage="home"/>
      <div className={style.content}>
        <AboutMe />
        <ReactAnimatedLogo />
      </div>
    </React.Fragment>
  );
};

export default Home;
