const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: 'Test book async',
  author: 'Me',
  genres: ['HTML'],
  rating: 9.5,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options)
    .then(r => r.json());
}

addBook(newBook).then(renderBook);

function renderBook(book) {
  console.log('Пришел ответ от бекенда можно рисовать');
  console.log(book);
}

