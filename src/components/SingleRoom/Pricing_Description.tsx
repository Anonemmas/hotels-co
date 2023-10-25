import { Skeleton } from "@chakra-ui/react";
import { CaretDown, Star } from "phosphor-react";

import { lg } from "constants/MediaQueries";

import { SingleRoomCommon } from "./Types";

export default function PricingAndDescription({
  width,
  room,
  isLoading,
}: SingleRoomCommon) {
  return (
    <>
      {(width as number) >= lg ? (
        <section className="grid grid-cols-6 gap-12 border-b px-4 pb-8 lg:px-0">
          <div className="col-span-4 flex flex-col">
            <div className="flex flex-col gap-2">
              {/* <h1 className="text-2xl font-medium">{room?.name}</h1> */}
              <div className="flex items-center gap-1 border-b border-gray-200 pb-2">
                {room?.beds} beds ・ {room?.bathrooms} bathrooms
              </div>
              <p>{room?.description}</p>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-6 rounded-[20px] border p-6 shadow-md">
            <div className="flex justify-between">
              {isLoading ? (
                <Skeleton className="h-4 w-1/5" borderRadius={20} />
              ) : (
                <p className="text-xl font-semibold">
                  ${Number(room?.price).toLocaleString("en-US")}{" "}
                  <span className="text-sm font-medium">night</span>
                </p>
              )}
              <div className="flex items-center text-xs">
                <Star className="h-3 w-3 text-black" weight="fill" />
                <p className="flex items-center gap-2 text-sm">
                  {room?.rating}
                </p>{" "}
                ・
                <p className="font-s underline-offset-2">
                  {room?.reviewCount} reviews
                </p>{" "}
              </div>
            </div>
            <div className="grid grid-cols-2 rounded-[10px] border border-gray-500 border-opacity-75 text-xs">
              <div className="col-span-1 rounded-tl-[10px] border-r border-b border-gray-500 p-3">
                <p className="font-medium">CHECK-IN</p>
                <p className="text-gray-500">Add date</p>
              </div>
              <div className="col-span-1  border-b border-gray-500 p-3">
                <p className="font-medium">CHECK-OUT</p>
                <p className="text-gray-500">Add date</p>
              </div>
              <div className="col-span-full flex items-center justify-between p-3">
                <p className=" flex flex-col">
                  <span>GUESTS</span>
                  <span>1 guest</span>
                </p>
                <CaretDown className="h-4 w-4" weight="bold" />
              </div>
            </div>
            <button
              disabled={isLoading}
              className="rounded-lg bg-primary py-4 text-sm font-bold text-white disabled:bg-opacity-60"
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </section>
      ) : (
        <section className="fixed inset-x-0 bottom-0 flex h-16 items-center justify-between border-t border-gray-200 bg-white px-4 text-sm">
          {isLoading ? (
            <Skeleton className="h-4 w-1/5" borderRadius={20} />
          ) : (
            <p className="text-xl font-semibold">
              ${Number(room?.price).toLocaleString("en-US")}{" "}
              <span className="text-sm font-medium">night</span>
            </p>
          )}
          <button
            disabled={isLoading}
            className="rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white disabled:bg-opacity-60 sm:py-3"
          >
            RESERVE
          </button>
        </section>
      )}
    </>
  );
}
