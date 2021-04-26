import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { characters } from "../../services/rickAndMorty";

import styles from "./HeaderMenu.module.scss";

const HeaderMenu: React.FC<{
  activePage?: string;
  lastCharactersPage?: number;
}> = ({ activePage, lastCharactersPage }) => {
  return (
    <header className={styles.menu} data-testid="menu">
      <Link to="/" className={!activePage ? "active" : ""}>
        Home
      </Link>
      <Link
        to={
          lastCharactersPage && lastCharactersPage > 1
            ? `/characters?page=${lastCharactersPage}`
            : "/characters"
        }
        className={activePage === "characters" ? "active" : ""}
      >
        Characters
      </Link>
    </header>
  );
};

export default HeaderMenu;
