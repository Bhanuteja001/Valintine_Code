import React from "react";
import Home from "../Components/Home";
import LockPage from "../Components/LockPage";
import { Route, Routes } from "react-router-dom";
import NoPage from "../Pages/NoPage";
import YesPage from "../Pages/YesPage";
import SpinPage from "../Pages/SpinPage";
import CouponPage from "../Pages/CouponPage";
import LetterPage from "../Pages/LetterPage";
import GalleryPage from "../Pages/GalleryPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LockPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/no" element={<NoPage/>}/>
        <Route path="/yes" element={<YesPage/>}/>
        <Route path="/spin" element={<SpinPage/>}/>
        <Route path="/coupon" element={<CouponPage/>}/>
        <Route path="/letter" element={<LetterPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
      </Routes>
    </div>
  );
};

export default MainRoute;
