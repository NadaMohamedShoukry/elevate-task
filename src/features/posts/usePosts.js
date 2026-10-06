import { getPosts } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";

function usePosts() {
  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return { posts, isPending, error };
}

export default usePosts;
