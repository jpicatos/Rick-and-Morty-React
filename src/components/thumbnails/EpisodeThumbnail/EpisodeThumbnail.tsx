import React from "react";
import { Episode } from "../../../models/episode";
import ThumbnailWrapper from "../ThumbnailWrapper";

const LocationThumbnail: React.FC<{ item: Episode }> = ({ item }) => {
  return (
    <ThumbnailWrapper base="episodes" detailId={`${item.id}`}>
      <span>Id: {item.id}</span>
      <span>Name: {item.name}</span>
      <span>Air date: {item.air_date}</span>
      <span>Characters: {item.characters.length}</span>
      <span>Episode: {item.episode}</span>
      <span>URL: {item.url}</span>
      <span>Created: {item.created}</span>
    </ThumbnailWrapper>
  );
};

export default LocationThumbnail;
