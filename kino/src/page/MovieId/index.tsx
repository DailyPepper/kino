import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "../../components/MovieCard/movie.interface";

const Container = styled.div`
    padding: 120px 35px 60px 35px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
`;
const MovieImage = styled.img`
  max-width: 400px;
  border-radius: 5px;
`;

const MovieInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;


const MovieId: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
  
    const api_key = "CZRR6PC-ZA9MW48-Q6F6JXF-ZD8KGT9";
    const api_url = `https://api.kinopoisk.dev/v1.4/movie/${id}`;
  
    useEffect(() => {
      async function fetchMovieDetails() {
        try {
          const resp = await fetch(api_url, {
            headers: {
              "Content-Type": "application/json",
              "X-API-KEY": api_key,
            },
          });
  
          if (!resp.ok) {
            throw new Error(`Failed to fetch movie details: ${resp.statusText}`);
          }
  
          const data = await resp.json();
          setMovie(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      }
  
      fetchMovieDetails();
    }, [api_url]);
  
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
      <Container>
        <MovieImage src={movie.poster?.url || "placeholder.jpg"} alt={movie.name} />
        <MovieInfo>
            <MovieTitle>{movie.name}</MovieTitle>
            <MovieTitle>{movie.description}</MovieTitle>
            <MovieTitle>{movie.name}</MovieTitle>
        </MovieInfo>
      </Container>
    );
}
 
export default MovieId;