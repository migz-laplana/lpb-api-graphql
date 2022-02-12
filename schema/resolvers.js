const { mockBooks } = require("../data/mockData");
const members = require("../data/members");
const { Member } = require("../models/Member");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => mockBooks,
    members: (parent, args, context, info) => {
      return Member.find().catch((e) => console.error(e));
    },
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title: title, author: author };
      mockBooks.push(newBook);
      return newBook;
    },
    addMember: (parent, args, context, info) => {
      const { firstName, middleName, lastName, position, batch } = args;
      const newMember = { firstName, middleName, lastName, position, batch };
      members.push(newMember);
      return newMember;
    },
  },
};

module.exports = resolvers;
