import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {Movie} from "./movie.interface";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieItem = styled.div`
  width: 23%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-radius: 5px;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-around;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const MovieCard: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const api_key = 'G10HV4T-ATN4EVY-M2A74H4-N9DR5HJ';
  const api_url = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=enName&selectFields=alternativeName&selectFields=names&selectFields=description&selectFields=type&selectFields=typeNumber&selectFields=status&selectFields=rating&selectFields=poster&selectFields=top10&notNullFields=rating.kp&notNullFields=poster.url&sortField=alternativeName&sortType=1&type=movie&status=announced';

  async function getMovies(url: string | URL | Request) {
    try {
      const resp = await fetch(url, {
        headers: {
          "Content-Type": 'application/json',
          "X-API-KEY": api_key
        }
      });

      if (!resp.ok) {
        throw new Error(`Failed to fetch movie data: ${resp.statusText}`);
      }

      const data = await resp.json();
      setMovies(data.docs);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }

  useEffect(() => {
    getMovies(api_url);
  }, []);

  return (
    <div ref={containerRef}>
      <Card>
        {movies.map((movie, index) => (
          <MovieItem key={index}>
            <MovieImage src={movie.poster?.url || 'placeholder.jpg'} alt={movie.name || movie.alternativeName} />
            <MovieInfo>
              <MovieTitle>{movie.name || movie.alternativeName}</MovieTitle>
              <MovieTitle>{movie.rating.await}</MovieTitle>
            </MovieInfo>
          </MovieItem>
        ))}
      </Card>
    </div>
  );
};

export default MovieCard;
