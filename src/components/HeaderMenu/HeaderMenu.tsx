import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { characters } from "../../services/rickAndMorty";
import styles from "./HeaderMenu.module.scss";


const HeaderMenu: React.FC<{
  activePage?: string;
}> = ({ activePage }) => {
  const [lastCharactersPage, setLastCharactersPage] = useState<number>(1);

  useEffect(() => {
    setLastCharactersPage(characters.getLocal()?.pageNumber || 1);
  }, [activePage])

  return (
    <header className={styles.menu} data-testid="menu">
      <Link to="/" className={!activePage ? "disabled" : ""}>
        Home
      </Link>
      <Link
        to={
          lastCharactersPage && lastCharactersPage > 1
            ? `/characters?page=${lastCharactersPage}`
            : "/characters"
        }
        className={activePage === "characters" ? "disabled" : ""}
      >
        Characters
      </Link>
    </header>
  );
};

export default HeaderMenu;
