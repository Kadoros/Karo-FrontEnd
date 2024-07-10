import { motion } from "framer-motion";
import styled from "styled-components";

export const Slider = styled.div`
  height: 150px;
  width: 100%;
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  height: 100px;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const Box = styled(motion.div)<{ bgPhoto: string}>` // direction 타입 추가
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  width: 100%;
  font-size: 66px;
  cursor: pointer;
  position: relative; /* Added to position Info absolutely */
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%; /* Ensure Info takes full width of the Box */
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 5;
`;

export const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
  z-index: 10;
`;

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
  z-index: 20;
`;

export const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

export const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;

export const Arrow = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #333; // Background color for the slim box
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1;
  border-radius: 5px; // Slightly rounded corners for the slim box
  font-size: 1.5rem;
  width: 60px; // Width of the slim box
  height: 30px; // Height of the slim box
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #555; // Darker shade on hover
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 10px;
`;

export const RightArrow = styled(Arrow)`
  right: 10px;
`;

