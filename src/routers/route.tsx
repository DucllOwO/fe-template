import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing all the themes
import HomePage from "../pages/HomePage";

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AppRoute;