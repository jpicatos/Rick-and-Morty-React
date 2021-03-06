import React from "react";
import HeaderMenu from "../../components/HeaderMenu";
import PaginatedCharacterGrid from "../../components/PaginatedCharacterGrid";

const Characters = () => {
  return (
    <React.Fragment>
      <HeaderMenu activePage="characters" />
      <PaginatedCharacterGrid />
    </React.Fragment>
  );
};

export default Characters;
