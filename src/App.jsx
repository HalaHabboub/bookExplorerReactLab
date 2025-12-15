import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './Pages/NotFound.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Books from './Pages/Books.jsx';
import Details from './Pages/Details.jsx';


function App() {
  return (
    <>

      <BrowserRouter>
        {/* Navigation */}

        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>




    </>
  )
}

export default App
