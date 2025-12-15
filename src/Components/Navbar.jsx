import React from 'react';
// Assuming the CSS file is saved as Navbar.css in the same directory

import './css/Navbar.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import NotFound from '../Pages/NotFound.jsx';
import Books from '../Pages/Books.jsx';


export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {/* Using a span for the separator allows us to style it specifically in CSS */}
            <span className="separator">|</span>
            <Link to="/books">Books</Link>
        </nav>
    );
}