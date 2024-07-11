import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "./basic-components";

const Wrapper = styled.div`
  background: black;
  height: 100vh;
`;

export default function Layout() {
  
  return (
    <Wrapper>
      <Header />

      <Outlet />

      <Footer />
    </Wrapper>
  );
}
