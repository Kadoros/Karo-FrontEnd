import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to top,
    black,
    ${(prop) => prop.theme.black.lighter}
  );
`;
