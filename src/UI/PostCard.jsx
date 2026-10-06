import { Calendar, User } from "lucide-react";
import BackButton from "./BackButton";

function PostCard({ post, authorName }) {
  return (
    <div className=" w-300 bg-white/75 backdrop-blur-lg overflow-hidden rounded-2xl grid grid-rows-[1fr_auto]">
      <div className="p-6 h-103 bg-[linear-gradient(0deg,rgba(33,96,154,0.75)_0%,rgba(0,37,74,0.75)_100%)] flex flex-col justify-end gap-4">
        <BackButton />{" "}
        <p className="font-bold text-4xl text-white"> {post.title}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-white">
            <User className="w-4.5 h-4.5" />
            <p className="text-sm font-normal">{authorName}</p>
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <Calendar className="w-4.5 h-4.5" />
            <p className="text-sm font-normal">Sun, August 24th, 2025</p>
          </div>
        </div>
      </div>
      <div className="p-6 h-122.25 whitespace-pre-line">{post.body}</div>
    </div>
  );
}

export default PostCard;
