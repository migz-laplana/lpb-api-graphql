require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema/types");
const resolvers = require("./schema/resolvers");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(
    `mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster0.cmscn.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to MongoDB!"))
  .then(() => {
    server
      .listen()
      .then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      })
      .catch((e) => {
        console.error("Error starting apollo server!");
        console.error(e);
      });
  })
  .catch((e) => {
    console.error("Error while connecting to MongoDB");
    console.error(e);
  });
