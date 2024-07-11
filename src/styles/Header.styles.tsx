import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 15px;
  padding: 10px 50px;
  color: white;
  transition: background-color 0.2s ease-in-out;
`;

export const Wrapper3 = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
  position: relative;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 65px;
  height: 50px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
  margin-right: 40px;
`;

export const Circle = styled(motion.span)`
  background-color: ${(props) => props.theme.skyblue};
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Input = styled(motion.input)`
  width: 50vw;
  max-width: 300px;
  height: 30px;
  font-size: 14px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transform-origin: right center;
  position: absolute;
  left: -270px;
`;

export const AvatarLabel = styled.label`
  width: 40px;
  overflow: hidden;
  height: 40px;
  border-radius: 20%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;
export const AvatarImg = styled.img`
  width: 100%;
`;

export const TriangleDiv = styled(motion.div)`
  width: 13px;
  overflow: hidden;
  height: 13px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Triangle = styled(motion.img)`
  width: 100%;
`;

export const Manu = styled(motion.div)`
  position: absolute;
  width: 210px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  top: 75px;
  right: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`;

export const ManuItems = styled(motion.ul)`
  display: flex;
  align-items: flex-start; /* 수정 */
  flex-direction: column;
  justify-content: flex-start; /* 수정 */
  width: 100%; /* 추가 */
  padding: 0; /* 추가 */
  margin: 0; /* 추가 */
`;
export const ManuItem = styled(motion.li)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start; /* 수정 */
  align-items: center;
  cursor: pointer;
  padding: 0 20px; /* 추가 */
  box-sizing: border-box; /* 추가 */
  text-align: left; /* 추가 */
  gap: 10px;
`;


export const ManuSvg = styled(motion.svg)`
  width: 30px;
  height: 30px;
  fill: white;
`;

export const ManuDetail = styled(motion.p)`
  color: white;
  font-size: 14px;
  margin-left: 10px;
`;
