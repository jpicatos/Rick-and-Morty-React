import React from "react";
import { useHistory } from "react-router";
import { Character } from "../../../models/character";
import CustomImage from "../../utils/CustomImage";
import ThumbnailWrapper from "../ThumbnailWrapper";
import style from "./CharacterThumbnail.module.scss";

const CharacterThumbnail: React.FC<{ item: Character }> = ({
  item
}) => {
  const tags: Array<string> = ["status", "species", "type", "gender"];

  return (
    <ThumbnailWrapper base="characters" detailId={`${item.id}`}>
      <div className={style.header}>
        <CustomImage
          img={item.image}
          altText={item.name}
          className={style.headerImg}
        />
        <div className={`${style["personal-info"]} ${style.ellipsis}`}>
          <span className={`${style.name} ${style.ellipsis}`}>
            {item.name}
          </span>
          <a
            className={`${style.location} ${style.ellipsis}`}
            href={item.location.url}
          >
            {item.location.name}
          </a>
        </div>
      </div>
      <CustomImage
        img={item.image}
        altText={item.name}
        className={style.mainImg}
      />
      <div className={style.tags}>
        {tags.map(tag => {
          const text = item[tag as keyof Character];
          return text !== "unknown" && text !== "" ? (
            <span
              key={`${item.id}-tag-${tag}`}
              data-testid={`${item.id}-tag-${tag}`}
            >{`#${text}`}</span>
          ) : null;
        })}
      </div>
      <span className={style.date}>
        CREATED {new Date(item.created).toLocaleDateString()}
      </span>
    </ThumbnailWrapper>
  );
};

export default CharacterThumbnail;
