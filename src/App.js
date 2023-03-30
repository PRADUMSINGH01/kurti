import "./App.css";
import { Fetch } from "./store/slice";
import { useEffect, useState } from "react";
import Kurti from "./Kurti";
import { useDispatch } from "react-redux";
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Caroual from "./components/Caroual";
import Projuct from "./components/Projuct";
import ProjectSlide from "./components/ProjectSlide";
import New from "./components/New";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetch());
  }, []);

  return (
        <Router>
        <Suspense fallback={<div className="container">Loading...</div>}></Suspense>
    <div className="">
        <Navbar />
        <Routes>
        {/* <Routes>
          <Route path="/" element={<Navbar />}></Route>
        </Routes> */}
          <Route path="/" element={<Caroual />}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Projuct />}></Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<ProjectSlide />}></Route>
        </Routes> */}

        <Routes>
          <Route path="/" element={<Footer />}></Route>
        </Routes>
        <Routes>
          <Route path="/kurti" element={<Kurti />}></Route>
        </Routes>

        <Routes>
          <Route path="/wishList" element={<WishList />} />
        </Routes>

        <Routes>
          <Route path="/Cart" element={<Cart />} />
        </Routes>

        <Routes>
          <Route path="/Profile" element={<Login />} />
        </Routes>

        <Routes>
        <Route path="*" element={<NoMatch />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
