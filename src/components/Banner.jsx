import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          {/*background image comes inside the header */}
          {/* title */}
          <h1 className="banner__title">{movie.name}</h1>

          <div className="banner__buttons">
            {/* div 2 buttons */}
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>

          <h1 className="banner__description">
            {/* banner description */}
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        {/* creating fade effect in this div */}
        <div className="banner__fadeBottom" />
      </header>
    </div>
  );
};

export default Banner;
