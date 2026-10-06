import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="p-2.5 text-sm font-semibold text-[#1A1A1A] bg-white/75 h-9.75 w-34 rounded-full flex items-center  gap-1.5"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Posts
    </button>
  );
}

export default BackButton;
