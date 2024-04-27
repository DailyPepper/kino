import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {Movie} from "./movie.interface";

const Card = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 60px;
`;

const MovieItem = styled.li`
  width: 23%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style-type: none;
`;

const MovieImage = styled.img`
    width: 100%;
    height: 85%;
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
const PaginationWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    padding: 10px 0px 20px 35px;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#c25353fa" : "#f2f2f2")};
  color: ${({ active }) => (active ? "white" : "black")};
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 4px;
  cursor: pointer;
`;
const MovieCard: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
  
    const api_key = "CZRR6PC-ZA9MW48-Q6F6JXF-ZD8KGT9";
    const api_url = (page: number) =>
      `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=4&selectFields=id&selectFields=name&selectFields=enName&selectFields=alternativeName&selectFields=names&selectFields=description&selectFields=type&selectFields=typeNumber&selectFields=status&selectFields=rating&selectFields=poster&selectFields=top10&notNullFields=rating.kp&notNullFields=poster.url&sortField=alternativeName&sortType=1&type=movie&status=announced`;
  
    async function getMovies(url: string | URL | Request) {
      try {
        const resp = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": api_key,
          },
        });
  
        if (!resp.ok) {
          throw new Error(`Failed to fetch movie data: ${resp.statusText}`);
        }
  
        const data = await resp.json();
        setMovies(data.docs);
        setTotalPages(Math.ceil(data.total / 4));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
  
    useEffect(() => {
      getMovies(api_url(currentPage));
    }, [currentPage]);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  

  return (
    <div ref={containerRef}>
        <PaginationWrapper>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
                <PaginationButton
                key={page}
                onClick={() => handlePageChange(page)}
                active={page === currentPage}
                >
                {page}
                </PaginationButton>
            )
            )}
        </PaginationWrapper>  
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
