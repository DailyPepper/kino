import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Movie {
  id: number;
  name: string;
  rating: number;
  poster: {
    url: string | null;
    previewUrl: string | null;
  };
  year: number;
  persons: unknown[];
}

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
  height: 90%;
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

// const MovieRating = styled.p`
//   font-size: 14px;
//   color: #888;
// `;

// const MovieDate = styled.p`
//   font-size: 14px;
//   color: #888;
// `;

const MovieCard: React.FC<{ person: unknown[] }> = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const api_key = 'G10HV4T-ATN4EVY-M2A74H4-N9DR5HJ';
  const api_url = 'https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=poster.url&type=movie&status=filming';

  async function getMovie(url: string | URL | Request) {
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
  
      // Обернуть данные в массив, если они не являются массивом
      const moviesData = Array.isArray(data) ? data : [data];
  
      setMovies(moviesData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }
  
  
  useEffect(() => {
    getMovie(api_url);
  }, []);

  return (
    <div ref={containerRef}>
      <Card>
        {movies.map((movie, index) => (
          <MovieItem key={index}>
            <MovieImage src={movie.poster.url || 'placeholder.jpg'} alt={movie.name} />            
            <MovieInfo>
              <MovieTitle>{movie.name}</MovieTitle>
              {/* <MovieRating>Rating:{movie.rating}</MovieRating> */}
            </MovieInfo>
          </MovieItem>
        ))}
      </Card>
    </div>
  );
};

export default MovieCard;
