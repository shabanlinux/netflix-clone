import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          // movie will return zIRssaKBGBitHXo4h680IGCJFIg.jpg, thats why we are including base url to get the actual url

          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
