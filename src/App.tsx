import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Routes/Home";
import LectureNote from "./Routes/Lecture-note";
import Search from "./Routes/Search";
import Header from "./components/Header";
import Login from "./Routes/Login";
import CreateAccount from "./Routes/Create-account";
import Profile from "./Routes/Profile";
import ProtectedRoute from "./components/Protected-route";
import Layout from "./components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import LoadingScreen from "./components/loading-screen";

const Wrapper = styled.div`
  hight: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movie/:movieId",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create-account",
        element: <CreateAccount />,
      },
      {
        path: "lecture-note",
        element: <LectureNote />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}</>
  );
}

export default App;

/* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Home />} />
        <Route path="/lecture-note" element={<LectureNote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-accout" element={<CreateAccount />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router> */
