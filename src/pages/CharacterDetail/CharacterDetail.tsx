import React from "react";
import { useParams } from "react-router";
import Character from "../../components/details/Character";
import HeaderMenu from "../../components/utils/HeaderMenu";


const Characters = () => {
  let { id }: any = useParams();
  return (
    <React.Fragment>
      <HeaderMenu />
      <Character id={id} />
    </React.Fragment>
  );
};

export default Characters;
