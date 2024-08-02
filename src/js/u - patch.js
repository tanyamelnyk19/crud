const BASE_URL = 'http://localhost:4040';

const newParams = { title: 'Big Test book 22' };

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(r => r.json());
}

updateBookById(newParams, 22)
