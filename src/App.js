
import './App.css';
import Home from "./routes/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import About from "./routes/About";
import Navigation from "./Componenet/Navigation";
import Detail from "./Componenet/Detail";


function App() {

  return (

  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/movie-detail" element={<Detail/>}/>
    </Routes>
  </BrowserRouter>


  );
}

export default App;
