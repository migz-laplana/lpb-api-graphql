const { mockBooks } = require("../data/mockData");
const members = require("../data/members");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => mockBooks,
    members: () => members,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title: title, author: author };
      mockBooks.push(newBook);
      return newBook;
    },
    addMember: (_, { firstName, middleName, lastName, position, batch }) => {
      const newMember = { firstName, middleName, lastName, position, batch };
      members.push(newMember);
      return newMember;
    },
  },
};

module.exports = resolvers;
