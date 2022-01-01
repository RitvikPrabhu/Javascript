class Book {
  constructor(name, author, publisher, numPages, numRead) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.numPages = numPages;
    this.numRead = numRead;
    this.numLeft = this.numPages - this.numRead;
  }

  incremeantPage() {
    this.numRead++;
    this.numLeft = this.numPages - this.numRead;
  }
}

export default Book;
