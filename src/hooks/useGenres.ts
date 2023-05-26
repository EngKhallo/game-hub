import { useEffect, useState } from "react";
import { FetchGenresResponse, Genres } from "../interfaces";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
