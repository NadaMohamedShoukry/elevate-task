import { Info } from "lucide-react";

function Error({ message }) {
  return (
    <div className=" flex items-center gap-1.5 border border-[#D00000] bg-[#FFEEEE] w-200 h-12-5 py-4 px-2.5 text-[#D00000]">
      <Info className="w-4.5 h-4.5" />
      <p className="font-normal text-sm">{message}</p>
    </div>
  );
}

export default Error;
