import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl5bzkhzy0hro01umbwcf91ir/master",
  cache: new InMemoryCache(),
});
