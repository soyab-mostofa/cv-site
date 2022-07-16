import { GraphQLClient, gql } from 'graphql-request';

const uri = process.env.REACT_APP_TOKEN;

const graphcms = new GraphQLClient(uri);

export async function getProjects() {
  const query = gql`
    {
      projects {
        id
        title
        link
      }
    }
  `;

  const results = await graphcms.request(query);

  return results.projects;
}
