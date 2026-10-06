import { getUsers } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

function useUsers() {
  const {
    data: users,
    isPending,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { users, isPending, error };
}

export default useUsers;
