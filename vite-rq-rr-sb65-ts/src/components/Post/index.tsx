import { Dispatch } from "react";
import { usePost } from "../../hooks/usePost";

function Post({ postId, setPostId }: { postId: number, setPostId:Dispatch<React.SetStateAction<number>>}) {
    const { status, data, error, isFetching }:any = usePost(postId);
  
    return (
      <div>
        <div>
          <a onClick={() => setPostId(-1)} href="#">
            Back
          </a>
        </div>
        {!postId || status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <h1>{data.title}</h1>
            <div>
              <p>{data.body}</p>
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    );
  }
  
  
  export default Post;