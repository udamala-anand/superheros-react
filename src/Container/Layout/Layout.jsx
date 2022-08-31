import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Collection from "../../Components/Collection/Collection";
import NotFound from "../../Components/NotFound/NotFound";
import HeroDetail from "../../Components/HeroDetail/HeroDetail";

export default function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/collection" replace />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<HeroDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
