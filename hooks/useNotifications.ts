import useSWR from "swr";

import fetcher from "../libs/fetcher";

/**
 * useNotifications hook
 *
 * This hook fetches a list of notifications for the given user ID.
 * If no user ID is provided, it doesn't fetch anything.
 *
 * The hook uses SWR to fetch the data from the API at the URL /api/notifications/:userId.
 * The fetcher function is a wrapper around the fetch API that handles errors and loading states.
 *
 * The hook returns an object with the following properties:
 * - data: the list of notifications, or null if the data is being fetched or an error occurred
 * - error: an error object if an error occurred, or null if the data is being fetched or no error occurred
 * - isLoading: a boolean indicating whether the data is being fetched or not
 * - mutate: a function to mutate the data, it will revalidate the data and update the cache
 */
const useNotifications = (userId?:string) => {
  const url = userId ? `/api/notifications/${userId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};


export default useNotifications;