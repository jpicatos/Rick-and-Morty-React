import React from "react";
import { Character } from "../../models/character";
import style from "./CharacterComponent.module.scss";

const CharacterComponent: React.FC<{ character: Character }> = ({
  character,
}) => {
  const tags: Array<string> = ["status", "species", "type", "gender"];
  return (
    <div className={style.wrapper} onClick={() => console.log(character)}>
      <div className={style.header}>
        <img src={character.image} alt={character.name} />
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
      <img src={character.image} alt={character.name} />
      <div className={style.tags}>
        {tags.map((tag, index) => {
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
