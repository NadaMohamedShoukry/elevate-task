import { getPost } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";

function usePost(id) {
  const {
    data: post,
    isPending,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });
  return { post, isPending, error };
}

export default usePost;
