import { Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { CaretLeft, Export, Heart, Star } from "phosphor-react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { lg } from "constants/MediaQueries";

import { SingleRoomCommon } from "./Types";

interface PhotoAndTitleProps extends SingleRoomCommon {
  back: () => void;
}
export default function PhotoAndTitle({
  back,
  isLoading,
  room,
  width,
}: PhotoAndTitleProps) {
  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-col">
      <section className="flex flex-col gap-2 px-4 lg:px-0">
        {isLoading ? (
          <>
            <Skeleton rounded={10} className="mt-1 h-5 w-60" />
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Skeleton rounded={10} className="mt-1 h-3 w-16" />
                <Skeleton rounded={10} className="mt-1 h-3 w-16" />
                <Skeleton rounded={10} className="mt-1 h-3 w-16" />
              </div>
              <div className="hidden items-center gap-4 lg:flex">
                <Skeleton rounded={10} className="mt-1 h-3 w-16" />
                <Skeleton rounded={10} className="mt-1 h-3 w-16" />
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-medium">{room?.name as string}</h1>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <p className="flex items-center gap-2 text-sm">
                  <Star className="h-3 w-3 text-black" weight="fill" />
                  {room?.rating}
                </p>{" "}
                ・
                <p className="font-semibold underline underline-offset-2">
                  {room?.reviewCount} reviews
                </p>{" "}
                ・<p className="text-gray-500">{room?.beds} beds</p>
              </div>
              <div className="hidden items-center gap-4 lg:flex">
                <button className="flex items-center gap-1 underline underline-offset-2">
                  <Export className="h-4 w-4" /> Share
                </button>
                <button className="flex items-center gap-1 underline underline-offset-2">
                  <Heart className="h-4 w-4" /> Save
                </button>
              </div>
            </div>
          </>
        )}
      </section>
      {(width as number) >= lg ? (
        <section className="relative grid h-[500px] grid-cols-2 gap-2">
          <div className="relative col-span-1">
            {!isLoading ? (
              <Image
                src={room?.photos[0]}
                fill
                alt="Room picture"
                className="h-full w-full rounded-l-[12px] object-cover"
              />
            ) : (
              <Skeleton
                className="h-full w-full rounded-l-[12px]"
                roundedLeft={12}
              />
            )}
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-2">
            {isLoading
              ? [...new Array(4)].map((_, index, arr) => (
                  <Skeleton
                    key={index}
                    className="h-full w-full"
                    borderBottomRightRadius={index + 1 === arr.length ? 12 : 0}
                    borderTopRightRadius={index === 1 ? 12 : 0}
                  />
                ))
              : room?.photos
                  .slice(1, 5)
                  .map((photo: string, index: number, arr: any[]) => (
                    <div key={index} className="relative">
                      <Image
                        src={photo}
                        key={index}
                        fill
                        alt="Room picture"
                        className={`h-full w-full object-cover ${
                          index === 1 && "rounded-tr-[12px]"
                        }  ${index + 1 === arr.length && "rounded-br-[12px]"}`}
                      />
                    </div>
                  ))}
          </div>
          {/* {!isLoading && (
            <button className="bg absolute bottom-4 right-4 flex items-center gap-1 rounded-md bg-white p-2 text-sm font-medium text-black">
              <DotsNine className="h-4 w-4" weight="bold" /> Show all photos
            </button>
          )} */}
        </section>
      ) : isLoading ? (
        <Skeleton className="h-[25rem] w-full" />
      ) : (
        <section>
          <div className="relative col-span-full h-full min-h-[300px] w-full sm:col-span-3">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper relative h-full w-full"
            >
              <div className="absolute inset-x-4 top-4 z-10">
                <div className="relative mt-4 flex items-center justify-between">
                  <button
                    className=" flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
                    onClick={back}
                  >
                    <CaretLeft className="h-5 w-5 " weight="bold" />
                  </button>
                  <div className="flex items-center gap-3">
                    <button className=" flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                      <Export className="h-5 w-5 " weight="bold" />
                    </button>
                    <button className=" flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                      <Heart className="h-5 w-5 " weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
              {room?.photos.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[25rem] w-full">
                    <picture>
                      <img
                        src={img}
                        alt="sweatshirt"
                        className="h-full w-full"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </picture>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </div>
  );
}
