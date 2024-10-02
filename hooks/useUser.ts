import useSWR from "swr";
import fetcher from "@/libs/fetcher";

//Using useSWR:
// The useSWR hook is called with two arguments:
// First Argument: A key .If userId is not provided, it returns null, which means no fetching will occur.
// Second Argument: The fetcher function that will be used to fetch the data from the provided URL.

const useUser = (userId: string) => {
  const { 
    data, 
    error,
    isLoading,
    mutate 
    } = useSWR(userId? `/api/users/${userId}`: null, fetcher); 
  
    //useSWR function is a React hook from(SWR lib), used for data fetching and revalidation.

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export default useUser;