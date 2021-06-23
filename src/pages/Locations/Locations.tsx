import React from "react";
import HeaderMenu from "../../components/HeaderMenu";
import PaginatedLocationGrid from "../../components/grids/PaginatedLocationGrid";

const Locations = () => {
  return (
    <React.Fragment>
      <HeaderMenu activePage="locations" />
      <PaginatedLocationGrid />
    </React.Fragment>
  );
};

export default Locations;
