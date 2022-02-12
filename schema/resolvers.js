const { mockBooks } = require("../data/mockData");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => mockBooks,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title: title, author: author };
      mockBooks.push(newBook);
      return newBook;
    },
  },
};

module.exports = resolvers;
