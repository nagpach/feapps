/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch } from "react";
import {
  useQueryClient,
} from "react-query";

import { usePosts } from "../../hooks/usePost"

function Posts({ setPostId } : { setPostId: Dispatch<React.SetStateAction<number>>})  {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching }:any = usePosts();

  return (
    <div className="m-2 p-4">
      <h1 className="m-2 p-4 font-extrabold">Posts</h1>
      <div className="m-2 p-4 h-[600px] w-[50%] overflow-scroll border-2">
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post:any) => (
                <p key={post.id} className="m-1 p-1">
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      // We can find the existing query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(["post", post.id])
                        ? {
                            fontWeight: "bold",
                            color: "green",
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Posts;
