import "./App.css";
import { Fetch } from "./store/slice";
import { useEffect, useState } from "react";
import Kurti from "./Kurti";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import Footer from "./components/Footer";
import Caroual from "./components/Caroual";
import Projuct from "./components/Projuct";
import ProjectSlide from "./components/ProjectSlide";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetch());
  }, []);

  return (
    <Router>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/kurti" element={<Kurti />}></Route>

          <Route path="/wishList" element={<WishList />} />
        </Routes>

        <Caroual />

        <Projuct />
        
        <ProjectSlide/>
        

        <Projuct />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
