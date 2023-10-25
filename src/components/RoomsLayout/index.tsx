import Room from "./Room";
import RoomsLayoutSkeleton from "./Skeleton";
import useRoomsLayout from "./useRoomsLayout";

export default function RoomsLayout() {
  const { isFetching, isFetchingNextPage, ref, rooms } = useRoomsLayout();

  return (
    <div className="mx-auto mb-8 grid max-w-[2130px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {rooms?.map((room: Room, index: number, arr) => (
        <Room
          key={room.id}
          lastItem={index + 1 === arr.length ? true : false}
          ref={ref}
          room={room}
        />
      ))}
      {(isFetching || isFetchingNextPage) && <RoomsLayoutSkeleton />}
    </div>
  );
}
