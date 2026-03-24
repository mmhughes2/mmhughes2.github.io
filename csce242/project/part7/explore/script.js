const BOOKS_URL = "https://mmhughes2.github.io/csce242/project/part7/data/books.json";

const popularList = document.getElementById("popular-list");
const chosenList = document.getElementById("chosen-list");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearSearch");
const feedback = document.getElementById("results-feedback");

let allBooks = [];

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";

  card.innerHTML = `
    <div class="book-main">
      <img class="book-cover" src="${book.img_name}" alt="${book.title} cover">
      <div class="book-info">
        <div class="book-meta">
          <span class="genre-pill">${book.genre}</span>
          <span class="rating-pill">Rating ${book.rating}</span>
        </div>
        <h3>${book.title}</h3>
        <p class="author-line">By ${book.author}</p>
        <p class="tagline">${book.tagline}</p>
      </div>
    </div>
    <button class="add-btn" type="button"><span>Add to Library</span><strong>+</strong></button>
  `;

  return card;
}

function renderBooks(filterText = "") {
  const query = filterText.trim().toLowerCase();
  const filtered = allBooks.filter((book) => {
    const haystack = `${book.title} ${book.author} ${book.genre} ${book.tagline}`.toLowerCase();
    return haystack.includes(query);
  });

  const popularBooks = filtered.filter((book) => book.section === "popular");
  const chosenBooks = filtered.filter((book) => book.section === "chosen");

  popularList.innerHTML = "";
  chosenList.innerHTML = "";

  popularBooks.forEach((book) => popularList.appendChild(createBookCard(book)));
  chosenBooks.forEach((book) => chosenList.appendChild(createBookCard(book)));

  feedback.textContent = filtered.length
    ? `Showing ${filtered.length} books from your ShelfSpace collection.`
    : "No books matched that search. Try another title, author, or genre.";
}

async function loadBooks() {
  try {
    feedback.textContent = "Loading books from ShelfSpace...";
    const response = await fetch(BOOKS_URL);

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }

    allBooks = await response.json();
    renderBooks();
  } catch (error) {
    feedback.textContent = "Could not load books yet. Push part7 to GitHub Pages and try again.";
    popularList.innerHTML = "";
    chosenList.innerHTML = "";
  }
}

searchInput?.addEventListener("input", (event) => {
  renderBooks(event.target.value);
});

clearButton?.addEventListener("click", () => {
  searchInput.value = "";
  renderBooks("");
  searchInput.focus();
});

loadBooks();
