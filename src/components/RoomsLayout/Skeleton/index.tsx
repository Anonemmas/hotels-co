import { Skeleton } from "@chakra-ui/react";

export default function RoomsLayoutSkeleton() {
  return (
    <>
      {[...new Array(8)].map((_, index) => (
        <div key={index} className="flex flex-col">
          <Skeleton
            key={index}
            className="col-span-1 h-[300px] rounded-lg"
            borderRadius={20}
          />
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Skeleton rounded={10} className="mb-1 h-3 w-3/5" />
              <Skeleton rounded={10} className="mb-1 h-3 w-8" />
            </div>
            <Skeleton rounded={10} className="h-3 w-1/2" />
            <Skeleton rounded={10} className="mt-1 h-3 w-1/3" />
          </div>
        </div>
      ))}
    </>
  );
}
