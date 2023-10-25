import { useEffect, useRef } from "react";

import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";

import { GetAllRooms } from "reactQuery/services";

const useRoomsLayout = () => {
  const { data, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["rooms"],
      queryFn: async ({ pageParam = 1 }) => {
        return GetAllRooms({ page: pageParam });
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length ? allPages.length + 1 : undefined,
    });

  const lastRoomRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastRoomRef.current,
    threshold: 1,
  });
  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  const rooms = data?.pages.flatMap((page) => page);

  return { isFetching, isFetchingNextPage, ref, rooms };
};

export default useRoomsLayout;
