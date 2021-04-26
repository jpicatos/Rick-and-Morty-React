import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterComponent from "./CharacterComponent";
import { character } from "./mock";

describe("<Characters />", () => {
  test("should type tag should not be displayed if type is not defined", async () => {
    const { queryByTestId } = render(
      <CharacterComponent character={character} />
    );
    const statusTag = queryByTestId(`${character.id}-tag-status`);
    const speciesTag = queryByTestId(`${character.id}-tag-species`);
    const typeTag = queryByTestId(`${character.id}-tag-type`);
    const genderTag = queryByTestId(`${character.id}-tag-gender`);
    expect(statusTag).toBeInTheDocument();
    expect(speciesTag).toBeInTheDocument();
    expect(typeTag).not.toBeInTheDocument();
    expect(genderTag).toBeInTheDocument();
  });

  test("should status tag should not be displayed if status is unknown", async () => {
    character.status = "unknown";
    character.type = "Cyborg";
    const { queryByTestId } = render(
      <CharacterComponent character={character} />
    );
    const statusTag = queryByTestId(`${character.id}-tag-status`);
    const speciesTag = queryByTestId(`${character.id}-tag-species`);
    const typeTag = queryByTestId(`${character.id}-tag-type`);
    const genderTag = queryByTestId(`${character.id}-tag-gender`);
    expect(statusTag).not.toBeInTheDocument();
    expect(speciesTag).toBeInTheDocument();
    expect(typeTag).toBeInTheDocument();
    expect(genderTag).toBeInTheDocument();
  });

  test("should species tag should not be displayed if species is not defined", async () => {
    character.species = "";
    character.type = "Cyborg";
    character.status = "Alive";
    const { queryByTestId } = render(
      <CharacterComponent character={character} />
    );
    const statusTag = queryByTestId(`${character.id}-tag-status`);
    const speciesTag = queryByTestId(`${character.id}-tag-species`);
    const typeTag = queryByTestId(`${character.id}-tag-type`);
    const genderTag = queryByTestId(`${character.id}-tag-gender`);
    expect(statusTag).toBeInTheDocument();
    expect(speciesTag).not.toBeInTheDocument();
    expect(typeTag).toBeInTheDocument();
    expect(genderTag).toBeInTheDocument();
  });

  test("should gender tag should not be displayed if gender is not defined", async () => {
    character.species = "Human";
    character.type = "Cyborg";
    character.status = "Alive";
    character.gender = "unknown";
    const { queryByTestId } = render(
      <CharacterComponent character={character} />
    );
    const statusTag = queryByTestId(`${character.id}-tag-status`);
    const speciesTag = queryByTestId(`${character.id}-tag-species`);
    const typeTag = queryByTestId(`${character.id}-tag-type`);
    const genderTag = queryByTestId(`${character.id}-tag-gender`);
    expect(statusTag).toBeInTheDocument();
    expect(speciesTag).toBeInTheDocument();
    expect(typeTag).toBeInTheDocument();
    expect(genderTag).not.toBeInTheDocument();
  });
});
