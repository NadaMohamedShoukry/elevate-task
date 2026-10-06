import { getUser } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

function useUser(id) {
  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
  return { user, isPending, error };
}

export default useUser;
