import logo from "./logo.svg";
import "./App.css";
import { Fetch } from "./store/slice";
import { useEffect, useState } from "react";
import Kurti from "./Kurti";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
