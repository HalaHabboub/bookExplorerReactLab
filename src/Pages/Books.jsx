import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const API_URL = 'https://openlibrary.org/search.json?q=programming';



export default function Books() {
    const API_URL = 'https://openlibrary.org/search.json?q=programming';
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(API_URL);
                setBooks(response.data.docs);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError('Failed to fetch books.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <p>Loading books...</p>;
    }

    return (
        <div>
            <h1>Programming Books</h1>
            {
                books.map((book) => {
                    // ID extracrtion
                    const id = book.key.split('/').pop();

                    // Image Cover
                    const coverId = book.cover_i;
                    const coverUrl = coverId
                        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
                        : 'No Cover Available';


                    // Authors
                    const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';

                    return (
                        <div key={book.key}>
                            <img src={coverUrl} alt={`Cover for ${book.title}`} />

                            <h3>
                                <Link to={`/Details/${id}`}>
                                    {book.title}
                                </Link>
                            </h3>

                            <p>Author(s): {authors}</p>
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    );
}
