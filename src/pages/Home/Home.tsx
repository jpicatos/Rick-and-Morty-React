import React from "react";
import HeaderMenu from "../../components/HeaderMenu";
import ReactAnimatedLogo from "../../components/ReactAnimatedLogo";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderMenu />
      <div className={style.content}>
        <ReactAnimatedLogo />
      </div>
    </React.Fragment>
  );
};

export default Home;
