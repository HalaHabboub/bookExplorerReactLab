import React from 'react'
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';


/*
Use useParams() from react-router-dom to get the id from the URL
• Make another API call to:
https://openlibrary.org/works/${id}.json
• Display:
o Title
o Description
o book covers image
*/
export default function Details() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`https://openlibrary.org/works/${id}.json`)
            .then(res => setBook(res.data))
            .catch(err => console.error(err));
    }, [id]);


    if (!book) return <p>Loading...</p>;

    const description = typeof book.description === 'string'
        ? book.description
        : book.description?.value;

    const coverUrl = book.covers
        ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
        : null;

    return (
        <div>
            <h1>{book.title}</h1>
            {coverUrl && <img src={coverUrl} alt={book.title} />}
            <p>{description}</p>
        </div>
    );
}
