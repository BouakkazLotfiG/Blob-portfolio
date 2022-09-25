import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cryptobase from "./components/ProjectPage/Cryptobase";
import Hoobank from "./components/ProjectPage/Hoobank";
import Netflix from "./components/ProjectPage/Netflix";
import ProjectManager from "./components/ProjectPage/ProjectManager";
import TikTok from "./components/ProjectPage/TikTok";
import ToDo from "./components/ProjectPage/ToDo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Cryptobase" element={<Cryptobase />} />
      <Route path="/Hoobank" element={<Hoobank />} />
      <Route path="/Netflix" element={<Netflix />} />
      <Route path="/Projectmanager" element={<ProjectManager />} />
      <Route path="/TikTok" element={<TikTok />} />
      <Route path="/ToDo" element={<ToDo />} />
    </Routes>
  </BrowserRouter>
);
