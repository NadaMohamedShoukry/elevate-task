import PostListFilter from "@/features/posts/PostListFilter";
import PostListHeader from "@/features/posts/PostListHeader";
import Posts from "@/features/posts/Posts";

function PostsPage() {
  return (
    <div className="bg-white/75 backdrop-blur-lg overflow-hidden rounded-2xl grid grid-rows-[auto_auto_ifr_auto]">
      <PostListHeader />
      <PostListFilter />
      <Posts />
    </div>
  );
}

export default PostsPage;
