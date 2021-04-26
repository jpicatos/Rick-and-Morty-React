import React, { useState } from "react";
import HeaderMenu from "../../components/HeaderMenu";
import PaginatedCharacterGrid from "../../components/PaginatedCharacterGrid";

const Characters = () => {
    const [lastCharactersPage, setLastCharactersPage] = useState<number>(1)
  return (
    <React.Fragment>
      <HeaderMenu lastCharactersPage={lastCharactersPage} activePage='characters'/>
      <PaginatedCharacterGrid setLastPage={setLastCharactersPage}/>
    </React.Fragment>
  );
};

export default Characters;
