import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  background: black;
  height: 100vh;
`;


export default function Layout() {
  const navigate = useNavigate();
  const LogOut = async () => {
    const ok = window.confirm("Are you sure you want to log out?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
