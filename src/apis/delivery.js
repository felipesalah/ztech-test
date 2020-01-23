import { createApolloFetch } from 'apollo-fetch';

export default createApolloFetch({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});