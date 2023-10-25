import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import useWindowSize from "hooks/useWindowSize";
import { GetRoomById } from "reactQuery/services";
export default function useSingleRoom() {
  const { query } = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: [`room${query.id}`],
    queryFn: () => GetRoomById({ id: query.id as string }),
  });
  const [room, setRoom] = useState(data?.data);

  const { width } = useWindowSize();

  useEffect(() => {
    setRoom(data?.data);
  }, [data?.data]);

  const { back } = useRouter();

  return { back, width, room, isLoading };
}
