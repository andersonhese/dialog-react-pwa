import { ApolloServer, gql } from 'apollo-server-express';
import { Express } from 'express';
const fs = require('fs');

const resolvers = require('./modules/users/resolvers');

class GraphQLServer {
  constructor(
    private app: Express
  ) {}

  async startServer () {
    const server = new ApolloServer({
      typeDefs: [
        gql(fs.readFileSync(__dirname.concat('/modules/users/schema.gql'), 'utf8'))
      ], 
      resolvers
    })

    await server.start();
    server.applyMiddleware({ app: this.app, path: '/graphql' });

    return server
  }
}

export { GraphQLServer } 