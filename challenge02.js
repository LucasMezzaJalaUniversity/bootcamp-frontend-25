// # OOP Challenge: Virtual Library System

// ## Statement
// You're tasked with building a simple **Virtual Library System** using Object-Oriented Programming principles in JavaScript.
// The system should allow adding books to a library, listing them, and marking them as borrowed.

// ### Requirements:
// 1. Create a `Book` class with:
//    - `title`, `author`, and `isBorrowed` properties.
//    - A method `borrow()` that sets `isBorrowed` to `true`.
//    - A method `returnBook()` that sets `isBorrowed` to `false`.

// 2. Create a `Library` class with:
//    - A `books` array to store Book objects.
//    - `addBook(book)` method to add a book.
//    - `listAvailableBooks()` method to list only books that are not borrowed.

// Use **encapsulation**, **abstraction**, and **composition**.

// ---

// ## Input Example
// ```javascript
// const book1 = new Book("1984", "George Orwell");
// const book2 = new Book("The Hobbit", "J.R.R. Tolkien");

// const library = new Library();
// library.addBook(book1);
// library.addBook(book2);

// book1.borrow();
// library.listAvailableBooks();

// OUTPUT
// Available Books:
// - The Hobbit by J.R.R. Tolkien

class Book {
  constructor(title, author) {
    // your code here
  }

  borrow() {
    // your code here
  }

  returnBook() {
    // your code here
  }
}

class Library {
  constructor() {
    // your code here
  }

  addBook(book) {
    // your code here
  }

  listAvailableBooks() {
    // your code here
  }
}
