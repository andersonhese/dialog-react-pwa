import { GraphQLServer } from './graphql/server'
import express, { NextFunction } from 'express'

// import { Router } from './routes'

const app = express();
const gqlServer = new GraphQLServer(app);

app.use(express.json());

gqlServer.startServer().then((r: any) => {});

export { app as App };