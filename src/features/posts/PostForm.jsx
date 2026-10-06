import { useForm } from "react-hook-form";
import useUsers from "../users/useUsers";
import { ChevronDown, Info } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useCreatePost from "./useCreatePost";

const PostSchema = z.object({
  title: z.string().trim().min(1, "Post title is required"),
  body: z.string().trim().min(1, "Post body is required"),
  author: z.string().min(1, "Please select an author for this post"),
});
function PostForm() {
  const { users } = useUsers();

  const postMutation = useCreatePost();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(PostSchema),
  });
  const onSubmit = (data) => {
    try {
      console.log(data);
      postMutation.mutate(data);
    } catch {
      setError("root", { type: "server", message: "Internal Server Error" });
    }
  };
  return (
    <div className="bg-white w-212 h-197.25 rounded-md p-6 m-6">
      <form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2.5 w-200 h-20">
          <label className="font-semibold text-[16px]" htmlFor="title">
            Title
          </label>
          <div className="h-12.75 rounded-md p-4 bg-black/10">
            <input
              id="title"
              type="text"
              placeholder="Enter post title"
              {...register("title")}
              className="w-full h-full"
            />
          </div>
          {errors.title && (
            <div className="text-[#D80000] flex items-center gap-1 ">
              <Info className="w-4 h-4" />
              <p className=" text-sm font-normal">{errors.title.message}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2.5 w-200">
          <label className="font-semibold text-[16px]" htmlFor="body">
            Body
          </label>
          <div className="rounded-md p-4 bg-black/10 h-31.5 ">
            <textarea
              id="body"
              placeholder="Enter post body"
              {...register("body")}
              className="w-full h-full"
            />
          </div>
          {errors.body && (
            <div className="text-[#D80000] flex items-center gap-1 ">
              <Info className="w-4 h-4" />
              <p className=" text-sm font-normal">{errors.body.message}</p>
            </div>
          )}
        </div>
        <div className="relative flex flex-col gap-2.5 w-200 h-20">
          <label className="font-semibold text-[16px]" htmlFor="author">
            Author
          </label>
          <div className="h-12.75 rounded-md p-4 bg-black/10">
            <select
              id="author"
              className="appearance-none text-black/50 font-normal text-[16px] w-full h-full "
              {...register("author")}
              x
            >
              <option value="">Select Author</option>
              {users?.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <ChevronDown className="pointer-events-none absolute right-3 bottom-2.5 text-black/50 w-4.5 h-4.5" />
          {errors.author && (
            <div className="text-[#D80000] flex items-center gap-1 ">
              <Info className="w-4 h-4" />
              <p className=" text-sm font-normal">{errors.author.message}</p>
            </div>
          )}
        </div>
        {errors.root && <Error message={errors.root.message} />}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#333333] w-101.75 h-12.75 rounded-md p-4 text-white"
          >
            Create a post
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
