import { useQuery } from "react-query";
import styled from "styled-components";

import { getMovies, IGetMoviesResult } from "../apis/api";

import BgImg from "../asset/bg.jpg";

import Shower from "../components/Shower";

const Wrapper = styled.div`
  background: black;
  height: 100vh;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={BgImg}>
            <Title>Discover Karo:</Title>
            <Overview>
              Your ultimate companion for a better college experience
            </Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
