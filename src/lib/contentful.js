import { GraphQLClient, gql } from 'graphql-request';

const space = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_TOKEN;

export const main = async () => {
  console.log(accessToken);
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const query = gql`
    {
      modelCollection {
        items {
          title
          modelLink
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};
