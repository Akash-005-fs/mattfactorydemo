// src/App.jsx
import {  Routes, Route } from 'react-router-dom';
import Home   from './pages/Home';


import './App.css';
import Products from './pages/Products';

function App() {
  return (
  <div className="App">
      <Routes>

        {/* 1️⃣  Loader is the “entry” screen Home page  */}
        <Route path="/" element={<Home />} />

        {/* 2️⃣  About page (shown after Loader navigates here) */}
        <Route path="/products" element={<Products/>} />

     
      </Routes>
    </div>
  );
}

export default App;
