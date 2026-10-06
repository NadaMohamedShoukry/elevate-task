import { NotebookPen } from "lucide-react";
import { useNavigate } from "react-router";

function CreatePostHeader() {
  const navigate = useNavigate();
  return (
    <div className=" bg-white py-4 px-6 h-16.75 w-300 flex items-center justify-between">
      <div>
        <button
          onClick={() => navigate("create-post")}
          className="flex items-center gap-1.5"
        >
          <NotebookPen className="w-7 h-7 font-normal" />
          <p className="font-semibold text-xl">Create a new post</p>
        </button>
      </div>
    </div>
  );
}

export default CreatePostHeader;
