import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

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

  return (
    <Category>
      <h2>{title}</h2>
      <Covers>
        {movies.map((movie) => (
          <Cover
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
          />
        ))}
      </Covers>
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
