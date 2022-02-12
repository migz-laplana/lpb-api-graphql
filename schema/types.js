// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against

const { gql } = require("apollo-server");

// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type Member {
    firstName: String
    middleName: String
    lastName: String
    position: String
    batch: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    authors: [String]
    getMembers: [Member]
  }
`;

module.exports = typeDefs;