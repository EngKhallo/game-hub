import { Game, Genres, Platform } from "../interfaces";
import useData from "./useData";

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
