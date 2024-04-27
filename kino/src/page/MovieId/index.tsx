import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "../../components/MovieCard/movie.interface";

const Container = styled.div`
    padding: 120px 90px 60px 90px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: 65px;
`;
const MovieImage = styled.img`
  width: 450px;
  height: 600px;
  border-radius: 5px;
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .span{
        display: flex;
        gap: 30px;
    }
`;

const MovieTitle = styled.h2<{size?: number}>`
    font-size: ${({size}) => ( size ? '18px' : '22px' )};
    font-size: 24px;
    margin-bottom: 10px;
`;
const MovieDescription = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
    text-align: justify;
`


const MovieId: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
  
    const api_key = "KD2SMBW-B7X4PA6-PHDCS7F-28YD92R";
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
            <span className="span">
                <MovieTitle size={25}>{movie.rating.await}</MovieTitle> 
                <MovieTitle>{movie.name}</MovieTitle>  
            </span>
            <MovieDescription>Описание: {movie.description}</MovieDescription>
            <MovieDescription>Длина фильма: {movie.movieLength}</MovieDescription>
            <MovieDescription>Выход: {movie.year}</MovieDescription>
            <MovieDescription>Релиз: {movie.releaseYear}</MovieDescription>
        </MovieInfo>
      </Container>
    );
}
 
export default MovieId;