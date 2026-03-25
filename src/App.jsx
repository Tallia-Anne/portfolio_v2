import * as React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Homepage from "./Pages/Homepage";
import SitePage from "./Pages/SitePage";
import Nav from "./Components/Nav/Nav";
 import Footer from "./Components/Footer/Footer";
import SinglePost from "./Pages/Singlepost";

function App() {
  return (
    <>
      {" "}
      {/* 1. On ouvre le fragment global */}
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projets" element={<SitePage />} />
        <Route path="/projet/:id" element={<SinglePost />} />
      </Routes>
      {/* 2. Le Footer doit être ici, en dehors de Routes */}
      <Footer />
    </>
  );
}

export default App;