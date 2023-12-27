const loadBooks = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5500/my-Projects/recipie-book/books.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const books = await response.json();
    displayBooks(books);
  } catch (error) {
    console.error("Error loading books:", error);
  }
};

const saveBooks = async (books) => {
  try {
    await fetch("http://127.0.0.1:5500/my-Projects/recipie-book/books.json", {
      method: "POST", // Change the method according to your server setup (e.g., PUT, POST)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(books),
    });
  } catch (error) {
    console.error("Error saving books:", error);
  }
};

document
  .getElementById("bookForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const edition = document.getElementById("edition").value;
    const ISBN = document.getElementById("isbn").value;
    const notes = document.getElementById("notes").value;
    const subjects = document.getElementById("subjects").value;
    const contributors = document.getElementById("contributors").value;
    const blurb = document.getElementById("blurb").value;
    const format = document.getElementById("format").value;
    const deweyDecimal = document.getElementById("deweyDecimal").value;

    // Create a book object
    const book = {
      author,
      title,
      edition,
      ISBN,
      notes,
      subjects,
      contributors,
      blurb,
      format,
      deweyDecimal,
      // Capture values for other fields similarly
    };

    let books = [];
    try {
      const response = await fetch("books.json"); // Fetch the existing books from the JSON file
      if (response.ok) {
        books = await response.json();
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }

    books.push(book); // Add the new book
    saveBooks(books); // Save the updated books to the JSON file
    displayBooks(books); // Display updated books
    this.reset(); // Clear the form fields
  });

function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const row = document.createElement("tr");
    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const editionCell = document.createElement("td");
    editionCell.textContent = book.edition;
    row.appendChild(editionCell);

    const isbnCell = document.createElement("td");
    isbnCell.textContent = book.ISBN;
    row.appendChild(isbnCell);

    const notesCell = document.createElement("td");
    notesCell.textContent = book.notes;
    row.appendChild(notesCell);

    const subjectsCell = document.createElement("td");
    subjectsCell.textContent = book.subjects;
    row.appendChild(subjectsCell);

    const contributorsCell = document.createElement("td");
    contributorsCell.textContent = book.contributors;
    row.appendChild(contributorsCell);

    const blurbCell = document.createElement("td");
    blurbCell.textContent = book.blurb;
    row.appendChild(blurbCell);

    const formatCell = document.createElement("td");
    formatCell.textContent = book.format;
    row.appendChild(formatCell);

    const deweyDecimalCell = document.createElement("td");
    deweyDecimalCell.textContent = book.deweyDecimal;
    row.appendChild(deweyDecimalCell);
    bookList.appendChild(row);
  });
}

loadBooks(); // Load and display books when the page loads
