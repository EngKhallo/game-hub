export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}
