import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";
import "../Styling/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //Code Snippet which runs based on a specific conditions
  useEffect(() => {
    // if [], run once when the component load, and dont'r run it again.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=dQw4w9WgXcQ//
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); /* Will take only the value of v*/
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Category>
      <h2>{title}</h2>
      <Covers>
        {movies.map((movie) => (
          <Cover
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
          />
        ))}
      </Covers>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Category>
  );
}

export default Row;

const Category = styled.div`
  color: white;
  margin-left: 20px;
`;

const Covers = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Cover = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100px;
  margin-right: 10px;
  transition: transform 450ms;
  :hover {
    transform: scale(1.08);
  }
`;
