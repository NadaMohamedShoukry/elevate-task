import { addPost } from "@/services/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body) => addPost(body),
    onSuccess: async () => {
      toast.success("A new post has been successfully created!");
      await queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}

export default useCreatePost;
