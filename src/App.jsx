import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:username" element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
