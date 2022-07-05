/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  useQuery,
} from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://graphqlzero.almansi.me/api";

function usePosts() {
  return useQuery("posts", async () => {
    const {
      posts: { data },
    } = await request(
      endpoint,
      gql`
        query {
          posts {
            data {
              id
              title
            }
          }
        }
      `
    );
    return data;
  });
}

function usePost(postId : number) {
    return useQuery(
      ["post", postId],
      async () => {
        const { post } = await request(
          endpoint,
          gql`
          query {
            post(id: ${postId}) {
              id
              title
              body
            }
          }
          `
        );
  
        return post;
      },
      {
        enabled: !!postId,
      }
    );
  }

  export { usePost, usePosts };