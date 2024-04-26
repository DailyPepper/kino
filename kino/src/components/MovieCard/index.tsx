import { useEffect, useRef, useState } from "react";
import { IMovie } from "./movie.interface";
import styled from "styled-components";
import axios from "axios";

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
  padding: 10px;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const MovieInfo = styled.div`
  padding-top: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const MovieRating = styled.p`
  font-size: 14px;
  color: #888;
`;

const MovieDate = styled.p`
  font-size: 14px;
  color: #888;
`;

const MovieCard = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchMovies = async () => {
    try {
      const url = `https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=id,name,poster,rating,releaseYear&id=${currentId}&type=movie&status=completed`;
      const response = await axios.get(url);
      setMovies((prev) => [...prev, ...response.data]);
      setCurrentId(response.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentId]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCurrentId((prevId) => (prevId ? prevId : ""));
        }
      });
      observerRef.current.observe(container);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Card>
        {movies.map((movie, index) => (
          <MovieItem key={index}>
            <MovieImage src={movie.poster} alt={movie.name} />
            <MovieInfo>
              <MovieTitle>{movie.name}</MovieTitle>
              <MovieRating>Rating: {movie.rating}</MovieRating>
              <MovieDate>Release Year: {movie.releaseYear}</MovieDate>
            </MovieInfo>
          </MovieItem>
        ))}
      </Card>
    </div>
  );
};

export default MovieCard;
