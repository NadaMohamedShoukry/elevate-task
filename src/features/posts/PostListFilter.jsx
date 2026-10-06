import SearchBar from "@/UI/SearchBar";
import { SelectMenu } from "@/UI/SelectMenu";

import useUsers from "../users/useUsers";
import { useSearchParams } from "react-router";

function PostListFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get("author") ?? "all";
  const setAuthor = (value) => {
    setSearchParams((params) => {
      if (value === "all") {
        params.delete("author");
      } else {
        params.set("author", value);
      }
      params.set("page", 1);
      return params;
    });
  };
  const query = searchParams.get("search") ?? "";
  const setQuery = (value) => {
    setSearchParams((params) => {
      if (value === "all") {
        params.delete("search");
      } else {
        params.set("search", value);
      }
      params.set("page", 1);
      return params;
    });
  };
  const { users } = useUsers();
  const authorOptions =
    users?.map((user) => ({
      name: user.name,
      value: user.id,
    })) ?? [];
  return (
    <div className="bg-black/10 border border-black/15 py-4.5 px-4 h-21.75 grid grid-cols-[1fr_auto] gap-10">
      <SearchBar query={query} setQuery={setQuery} />
      <div className="flex items-center gap-1.5">
        <p className="font-normal text-[16px]">Author:</p>
        <SelectMenu
          data={authorOptions}
          dataValue={author}
          setDataValue={setAuthor}
        />
      </div>
    </div>
  );
}

export default PostListFilter;
