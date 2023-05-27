import { Game, GameQuery, Genres, Platform } from "../interfaces";
import useData from "./useData";

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery]
  );

export default useGames;
