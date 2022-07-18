import { App } from './app';

const port = process.env.PORT || 4001;

(async () => {
  App.listen(port, () => {
    console.log(`GraphQL listening in http://localhost:${port}/graphql`);
  });
})();