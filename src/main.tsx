import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./App";
import Portfolio from "./pages/Portfolio";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
