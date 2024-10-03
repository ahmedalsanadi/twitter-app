import useSWR from "swr";
import fetcher from "@/libs/fetcher";

interface User {
  id: string;
  name: string;
  username: string;
  profileImage?: string; // Optional property
}

const useUsers = () => {
  const { 
    data, 
    error,
    isLoading,
    mutate
  } = useSWR<User[]>("/api/users", fetcher); // Specify that data is an array of User objects

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export default useUsers;
