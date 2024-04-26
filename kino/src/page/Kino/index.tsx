import styled from "styled-components";
import MovieCard from "../../components/MovieCard";
import { useState } from "react";
import { IMovie } from "./movie.interface";

const Section = styled.section`
    padding: 90px 35px 0px 35px;
`
const Home = () => {
    const [movie, setMovie] = useState<Array<IMovie>>([])
    return ( 
        <>
            <Section>
                <h2>
                    Лучшие фильмы
                </h2>
                    <MovieCard/>
            </Section>
        </>
     );
}
 
export default Home;