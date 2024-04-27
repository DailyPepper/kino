import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

const Section = styled.section`
    padding: 90px 35px 90px 35px;
`
const HeadText = styled.h2`
    display: flex;
    justify-content: center;
`
const Home = () => {
    return ( 
        <>
            <Section>
                <HeadText>
                    Лучшие фильмы
                </HeadText>
                    <MovieCard/>
            </Section>
        </>
     );
}
 
export default Home;