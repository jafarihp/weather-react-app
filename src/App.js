import React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-loading";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes maxLoadingTime={100}>
        <Route path="/*" element={<Navigate to="/404" />} loading />
        <Route path="/404" element={<NotFound />} />
        <Route path="/Contact" element={<Contact />} loading />
        <Route path="/Search" element={<Search />} loading />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
