import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

import styled from "styled-components";

function Banner() {
  const [movie, setMovie] = useState([]);

  //Code Snippet which runs based on a specific conditions
  useEffect(() => {
    // if [], run once when the component load, and dont'r run it again.
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  return (
    <Header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <Contents>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        <Buttons>
          <Play>Play</Play>
          <MyList>My List</MyList>
        </Buttons>
        <Description>{movie?.overview}</Description>
      </Contents>
      <BottomFade></BottomFade>
    </Header>
  );
}

export default Banner;

const Header = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
`;

const Contents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;
const Buttons = styled.div``;

const Play = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const MyList = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const BottomFade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
