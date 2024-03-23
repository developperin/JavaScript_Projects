document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    // Create book object
    const book = {
        title: title,
        author: author,
        rating: rating,
        review: review
    };

    // Display the book in the list
    displayBook(book);

    // Clear form fields
    document.getElementById("bookForm").reset();
});

function displayBook(book) {
    const bookList = document.getElementById("bookList");

    // Create a new book element
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Rating:</strong> ${book.rating}</p>
        <p><strong>Review:</strong> ${book.review}</p>
    `;

    // Append book element to the book list
    bookList.appendChild(bookItem);
}
