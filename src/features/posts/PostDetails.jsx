import { useParams } from "react-router";
import usePost from "./usePost";
import PostCard from "@/UI/PostCard";
import useUser from "../users/useUser";
import Error from "@/UI/Error";
import LoadingSpinner from "@/UI/LoadingSpinner";

function PostDetails() {
  const { id } = useParams();
  console.log(id);
  const { post, isPending, error } = usePost(id);
  const authorId = post?.userId;
  const { user } = useUser(authorId);

  if (isPending) return <LoadingSpinner />;
  if (error) return <Error message={"Something went wrong."} />;
  return <PostCard post={post} authorName={user?.name} />;
}

export default PostDetails;
