/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Post from "../components/Post";
import Posts from "../components/Posts";

const endpoint = "https://graphqlzero.almansi.me/api";

const queryClient = new QueryClient();

const PostsPage = ()  => {
  const [postId, setPostId] = React.useState<number>(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <p className="m-2 p-2 text-red-400">
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{" "}
        <strong>
          (You may need to throttle your network speed to simulate longer
          loading sequences)
        </strong>
      </p>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
      {/*<ReactQueryDevtools initialIsOpen />*/}
    </QueryClientProvider>
  );
}
export { PostsPage } ;