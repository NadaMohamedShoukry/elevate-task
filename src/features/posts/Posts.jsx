import PostListCard from "@/UI/PostListCard";
import usePosts from "./usePosts";
import { PostsPagination } from "@/UI/PostsPagination";
import { useNavigate, useSearchParams } from "react-router";
import Error from "@/UI/Error";
import LoadingSpinner from "@/UI/LoadingSpinner";
const POSTS_PER_PAGE = 10;
function Posts() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { posts, isPending, error } = usePosts();
  const postsData = posts ?? [];

  //filter first
  const authorId = searchParams.get("author") ?? "all";
  const search = searchParams.get("search") ?? "";
  const filteredPosts =
    authorId === "all"
      ? postsData
      : postsData.filter((post) => String(post.userId) === authorId);
  const searchedPosts = filteredPosts.filter((post) => {
    const searchValue = search.toLowerCase();
    return post.title.toLowerCase().includes(searchValue);
  });
  const currentPage = Number(searchParams.get("page") ?? 1);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = searchedPosts.slice(start, start + POSTS_PER_PAGE);
  const totalPages = Math.ceil(searchedPosts.length / POSTS_PER_PAGE);

  if (isPending) return <LoadingSpinner />;
  if (error) return <Error message={"Something went wrong."} />;
  return (
    <div>
      {currentPosts.map((post, index) => (
        <PostListCard
          key={post.id}
          post={post}
          isLast={index === currentPosts.length - 1}
          onClick={() => navigate(`/post/${post.id}`)}
        />
      ))}
      <PostsPagination totalPages={totalPages} />
    </div>
  );
}

export default Posts;
