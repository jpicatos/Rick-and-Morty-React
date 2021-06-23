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

  const disabledClass = (page: string) => {
    return activePage === page ? "disabled" : "";
  }
  return (
    <header className={styles.menu} data-testid="menu">
      <Link to="/" className={disabledClass("home")}>
        Home
      </Link>
      <Link
        to={
          lastCharactersPage && lastCharactersPage > 1
            ? `/characters?page=${lastCharactersPage}`
            : "/characters"
        }
        className={disabledClass("characters")}
      >
        Characters
      </Link>
    </header>
  );
};

export default HeaderMenu;
