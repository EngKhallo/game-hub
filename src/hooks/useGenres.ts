import { Genres } from "../interfaces";
import useData from "./useData";

const useGenres = () => useData<Genres>('/genres')

export default useGenres;
