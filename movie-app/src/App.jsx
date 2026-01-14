import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import Spinner from "./component/Spinner";
import MovieCard from "./component/MovieCard";
import {useDebounce} from "react-use"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
};

const App = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")
  const [topMovies, setTopMovies] = useState ([])

  useDebounce(() => setDebouncedSearchTerm(search), 500, [search])

  const getMovies = async (query = "") => {
    setIsLoading(true);
    setError("");

    try {
      const enpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(enpoint, API_OPTIONS);
      console.log(response);

      if (!response.ok) {
        throw new Error("Faild to fetch movies");
      }
      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error || "Faild to fetch mocies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setError("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTopMovies = async () => {
    setIsLoading(true);
    setError("");
    try {
       const response = await fetch(`${API_BASE_URL}/movie/top_rated`, API_OPTIONS)

       const dataTopRated = await response.json()

       setTopMovies(dataTopRated.results || []);


    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setError("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTopMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />

          <h1>
            Find <span className="text-gradient">Movies</span> You'll Love
            Without the Hassle
          </h1>

          <Search searchTerm={search} setSearchTerm={setSearch} />
        </header>

        {topMovies.length > 0 && (
          <section className="trending">
            <ul>
              {topMovies.map((trend, index) => (
                <li key={trend.id}>
                  <p>{index + 1}</p>
                  <img src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} alt={trend.title} />
                  
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <ul>
              {movieList.map((movies) => (
                <MovieCard key={movies.id} movie={movies} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
