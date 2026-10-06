import CreatePostHeader from "@/features/posts/CreatePostHeader";
import PostForm from "@/features/posts/PostForm";

function CreatePostPage() {
  return (
    <div className="h-225.25 bg-white/75 backdrop-blur-lg overflow-hidden rounded-2xl grid grid-rows-[auto_1fr]">
      <CreatePostHeader />
      <PostForm />
    </div>
  );
}

export default CreatePostPage;
