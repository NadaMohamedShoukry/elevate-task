function PostListCard({ post, isLast, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-13.75 w-300 py-4.5 px-4  hover:bg-white/50 ${!isLast ? "border-b border-b-black/15" : ""} `}
    >
      <h2 className="font-medium text-[16px] text-left">{post.title}</h2>
    </button>
  );
}

export default PostListCard;
