import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import MainPage from "./components/MainPage";
import { SignupPage } from "./components/signup/Signup";
import TreeMap from "./components/Tree/TreeMap";
import { LoginPage } from "./components/login/Login";
import { useSelector } from "react-redux";
import { selectRoadmapProps } from "./components/home/home.selector";
import { LandingPage } from "./components/LandingPage";

export default function App() {
  const roadmapInfo = useSelector(selectRoadmapProps);

  const info = {
    data: roadmapInfo,
    width: 1000,
    height: 800,
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/frontend" element={<TreeMap {...info} />} />
      <Route path="/backend" element={<TreeMap {...info} />} />
      <Route path="/devops" element={<TreeMap {...info} />} />
      <Route path="/android" element={<TreeMap {...info} />} />
      <Route path="/postgresql-dba" element={<TreeMap {...info} />} />
      <Route path="/flutter" element={<TreeMap {...info} />} />
      <Route path="/react" element={<TreeMap {...info} />} />
      <Route path="/javascript" element={<TreeMap {...info} />} />
      <Route path="/nodejs" element={<TreeMap {...info} />} />
      <Route path="/python" element={<TreeMap {...info} />} />
      <Route path="/java" element={<TreeMap {...info} />} />
      <Route path='/computer-science' element={<TreeMap {...info} />} />
      {/* <Route path='/question' element={<TreeMap {...questions} />} /> */}
    </Routes>
  );
}

