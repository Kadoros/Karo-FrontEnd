import { useNavigate, useParams } from "react-router-dom";
import {
  Slider,
  Row,
  Box,
  Info,
  Overlay,
  BigMovie,
  BigCover,
  BigTitle,
  BigOverview,
  LeftArrow,
  RightArrow,
} from "../styles/Silder.style";
import { AnimatePresence, useScroll } from "framer-motion";
import { useQuery } from "react-query";
import { useState } from "react";
import { getMovies, IGetMoviesResult } from "../apis/api";
import { makeImagePath } from "../utils/utils";

const offset = 3;

export const rowVariants = {
  hidden: (direction: string) => {
    const value = direction === "Next" ? window.outerWidth + 5 : -window.outerWidth - 5;   
    console.log(direction);
    console.log(value);
    
    return {
      x: value,
    };
  },
  visible: {
    x: 0,
  },
  exit: (direction: string) => {
    const value = direction === "Prev" ? window.outerWidth + 5 : -window.outerWidth - 5
    console.log(direction);
    console.log(value);
    
    return {
      x: value,
    };
  },


};

export const boxVariants = {
  normal: {
    scale: 1,
    zIndex: 0, // Ensure the default zIndex is lower
  },
  hover: {
    scale: 1.3,
    y: -80,
    zIndex: 10, // Raise zIndex on hover
    transition: {
      delay: 0.3,
      duration: 0.1,
    },
  },
};

export const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.1,
    },
  },
};

export default function Shower() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const { movieId } = useParams<{ movieId: string }>();
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("Next");
  const [leaving, setLeaving] = useState(false);

  const handleNext = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      setDirection("Next");
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.ceil(totalMovies / offset);

      setIndex((prev) => (prev === maxIndex - 1 ? 0 : prev + 1));
    }
  };

  const handlePrev = () => {
    if (data) {
      if (leaving) return;
      setDirection("Prev");
      setLeaving(true);
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.ceil(totalMovies / offset);

      setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClicked = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const onOverlayClick = () => navigate("/");

  const clickedMovie =
    movieId && data?.results.find((movie) => movie.id + "" === movieId);

  return (
    <>
      <Slider>
        <AnimatePresence
          initial={false}
          onExitComplete={toggleLeaving}
          custom={direction}
        >
          <Row
            variants={rowVariants}
            initial={"hidden"}
            animate="visible"
            exit={"exit"}
            transition={{ type: "tween", duration: 1 }}
            key={index}
            style={{ x: `-${index * 100}%` }}
            custom={direction}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  layoutId={movie.id + ""}
                  variants={boxVariants}
                  key={movie.id}
                  initial="normal"
                  onClick={() => onBoxClicked(movie.id)}
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                >
                  <Info variants={infoVariants}>
                    <h4>{movie.title}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
        <LeftArrow
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          onClick={handlePrev}
        >
          &#9664;
        </LeftArrow>
        <RightArrow
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleNext}
        >
          &#9654;
        </RightArrow>
      </Slider>
      <AnimatePresence>
        {movieId && (
          <>
            <BigMovie
              layoutId={movieId}
              style={{
                top: scrollY.get() + 100,
              }}
            >
              {clickedMovie && (
                <>
                  <BigCover
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${makeImagePath(
                        clickedMovie.backdrop_path,
                        "w500"
                      )})`,
                    }}
                  />
                  <BigTitle>{clickedMovie.title}</BigTitle>
                  <BigOverview>{clickedMovie.overview}</BigOverview>
                </>
              )}
            </BigMovie>
            <Overlay
              onClick={onOverlayClick}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
