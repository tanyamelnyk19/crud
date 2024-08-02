const BASE_URL = 'http://localhost:4040';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();

  return newBook;
}

async function addBookAndUpdateUI() {
  try {
    const book = await addBook({
      title: 'Test book async',
      author: 'Me',
      genres: ['HTML'],
      rating: 9.5,
    });
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

// addBookAndUpdateUI()

async function fetchBooks() {
  const res = await fetch(`${BASE_URL}/books`);
  const books = await res.json();

  return books;
}

// fetchBooks()

async function fetchBookById(bookId) {
  const res = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await res.json();

  return book;
}

// fetchBookById(36)

async function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };

  const res = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const book = await res.json();
  return book;
}

// removeBook(26)

async function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const res = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const updatedBook = await res.json();
  return updatedBook;
}

// updateBookById({ title: "Test book async UPDATED", rating: 8 }, 36)