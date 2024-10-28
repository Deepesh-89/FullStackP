import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Prices from './prices/Prices';
import Signup from './components/Signup';
import Joins from './Join/Joins';
import AboutUs from './about/AboutUs';



function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Prices />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/join" element={<Joins />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
 