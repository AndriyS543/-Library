import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook } from '../../redux/books/actionCreators';
import createBookWithID from '../../utils/createBookWithID';

import booksData from '../../data/books.json';
import './BookForm.css';
const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithID(
        {
          title,
          author,
        },
        'manual'
      );
      dispatch(addBook(book));
      setAuthor('');
      setTitle('');
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = parseInt(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(addBook(createBookWithID(randomBook, 'random')));
  };

  const handleAddRandomBookViaAPI = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book');
      if (res.data && res.data.title && res.data.author) {
        dispatch(addBook(createBookWithID(res.data, 'API')));
      }
    } catch (e) {
      console.log('Error fetching random book');
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="authot"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
