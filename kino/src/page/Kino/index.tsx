import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

const Section = styled.section`
    padding: 90px 35px 90px 35px;
`
const Home = () => {
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