export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

export type CharacterLocation = {
  name: string;
  url: string;
};

export type AllCharacters = {
  info: CharactersInfo;
  results: Array<Character>;
};

export type CharactersInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
