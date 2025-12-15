import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import NotFound from '../Pages/NotFound.jsx';
import Books from '../Pages/Books.jsx';



export default function Navbar() {
    return (

        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/books">Books</Link>

        </nav>


    )
}
