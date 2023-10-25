import { Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, Star, X } from "phosphor-react";

import useNav from "../useNav";

const SubNav = () => {
  const {
    closeResults,
    collapsed,
    handleFocus,
    isLoading,
    searchResults,
    setCloseResults,
    setValue,
    searchRef,
    value,
    debounced,
  } = useNav();
  return (
    <div className="z-10 flex items-center justify-center bg-white bg-opacity-90 py-2 backdrop-blur-md ">
      <div
        className={`relative h-10 ${
          collapsed ? "w-10" : "w-full max-w-[20rem] lg:w-80"
        } rounded-full duration-300 ease-out`}
      >
        <input
          ref={searchRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setCloseResults(false);
          }}
          className="h-full w-full rounded-full border border-gray-200 px-4 focus:outline-0 focus:outline-gray-200"
          placeholder="Search place here..."
        />
        <button
          onClick={() => {
            value ? setValue("") : handleFocus();
          }}
          className="absolute inset-y-1 right-1 flex w-8 items-center justify-center rounded-full border border-white bg-primary text-white duration-200 ease-linear hover:bg-opacity-80"
        >
          {!value ? (
            <MagnifyingGlass className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </button>
        {!closeResults && debounced.length > 0 && (
          <div className="absolute left-0 top-[120%] z-20 w-full max-w-[20rem] rounded-[20px] border bg-white p-4 lg:w-80">
            <button
              className="mb-1 flex items-center gap-2 font-medium text-red-600"
              onClick={() => setCloseResults(true)}
            >
              <X className="h-4 w-4" weight="bold" /> Close
            </button>
            <div>
              {isLoading ? (
                [...new Array(2)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between border-b py-2 last-of-type:border-b-0"
                  >
                    <div className="flex gap-3">
                      <Skeleton
                        borderRadius={6}
                        className="min-w-16 min-h-16 h-16 w-16 "
                      />

                      <div className="flex flex-col">
                        <Skeleton rounded={10} className="mb-1 h-3 w-28" />
                        <Skeleton rounded={10} className="mb-1 h-3 w-24" />
                        <Skeleton rounded={10} className="mt-1 h-3 w-3/5" />
                      </div>
                    </div>
                    <Skeleton rounded={10} className="mb-1 h-3 w-8" />
                  </div>
                ))
              ) : searchResults.length > 0 ? (
                searchResults?.map((room: any, index: number) => (
                  <Link
                    key={index}
                    onClick={() => setCloseResults(true)}
                    className="group flex items-start justify-between border-b py-2 duration-200 ease-in last-of-type:border-b-0"
                    href={`/room/${room.id}`}
                  >
                    <div className="flex gap-3">
                      <Image
                        src={room?.photos[0]}
                        alt="hotel"
                        width={64}
                        height={64}
                        className="min-w-16 min-h-16 h-16 w-16 rounded-md object-cover"
                      />
                      <p className="flex flex-col">
                        <span className="inline-block font-semibold duration-200 ease-linear group-hover:text-primary">
                          {room.name}
                        </span>
                        <span className="inline-block text-gray-500">
                          {room.beds} beds・{room.bathrooms}{" "}
                          {3 > 1 && room?.bathrooms !== 0
                            ? "bathrooms"
                            : "bathroom"}
                        </span>
                        <span className="mt-1 font-semibold">
                          ${Number(room.price).toLocaleString("en-US")} a night
                        </span>
                      </p>
                    </div>
                    <p className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 text-black" weight="fill" />
                      {room.rating}
                    </p>
                  </Link>
                ))
              ) : (
                <p className="justify-self-center text-center">
                  Oops! No rooms found
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubNav;
