import { Plus, ScrollText } from "lucide-react";
import { useNavigate } from "react-router";

function PostListHeader() {
  const navigate = useNavigate();
  return (
    <div className=" bg-white  py-4 px-6 h-16.75 w-300 flex items-center justify-between  ">
      <div className="flex gap-2.5 ">
        <ScrollText className="w-7 h-7" />
        <p className="font-semibold text-xl">Post List</p>
      </div>
      <div>
        <button
          onClick={() => navigate("create-post")}
          className="flex items-center gap-1.5"
        >
          <Plus className="w-4.5 h-4.5 font-normal" />
          <p className="text-[16px] font-normal">Create a new post</p>
        </button>
      </div>
    </div>
  );
}

export default PostListHeader;
