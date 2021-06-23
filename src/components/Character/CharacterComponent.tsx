import React from "react";
import { useHistory } from "react-router";
import { Character } from "../../models/character";
import CustomImage from "../CustomImage";
import style from "./CharacterComponent.module.scss";

const CharacterComponent: React.FC<{ character: Character }> = ({
  character
}) => {
  const tags: Array<string> = ["status", "species", "type", "gender"];
  let history = useHistory();
  const navigateToDetail = () => {
    history.push(`characters/${character.id}`);
  }

  return (
    <div className={style.wrapper} onClick={navigateToDetail}>
      <div className={style.header}>
        <CustomImage
          img={character.image}
          altText={character.name}
          className={style.headerImg}
        />
        <div className={`${style["personal-info"]} ${style.ellipsis}`}>
          <span className={`${style.name} ${style.ellipsis}`}>
            {character.name}
          </span>
          <a
            className={`${style.location} ${style.ellipsis}`}
            href={character.location.url}
          >
            {character.location.name}
          </a>
        </div>
      </div>
      <CustomImage
        img={character.image}
        altText={character.name}
        className={style.mainImg}
      />
      <div className={style.tags}>
        {tags.map(tag => {
          const text = character[tag as keyof Character];
          return text !== "unknown" && text !== "" ? (
            <span
              key={`${character.id}-tag-${tag}`}
              data-testid={`${character.id}-tag-${tag}`}
            >{`#${text}`}</span>
          ) : null;
        })}
      </div>
      <span className={style.date}>
        CREATED {new Date(character.created).toLocaleDateString()}
      </span>
    </div>
  );
};

export default CharacterComponent;
