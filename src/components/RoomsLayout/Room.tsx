import { forwardRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "phosphor-react";

import { Room } from "reactQuery/Types";

const Room = forwardRef(
  ({ room, lastItem }: { room: Room; lastItem: boolean }, ref) => {
    return (
      <Link ref={(lastItem ? ref : null) as any} href={`/room/${room?.id}`}>
        <div>
          <div className="relative h-[300px] w-full rounded-[20px]">
            <Image
              src={room.photos[0]}
              alt="Room picture"
              className="h-full w-full rounded-[20px] object-cover"
              fill
            />
            <Heart
              className="absolute right-4 top-4 h-6 w-6 text-primary"
              weight="regular"
            />
          </div>
          <div className="mt-4 flex items-start justify-between text-sm">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">{room?.name}</p>
              <p className="text-gray-500">
                {room?.beds} beds・{room?.bathrooms}{" "}
                {room?.bathrooms > 1 && room?.bathrooms !== 0
                  ? "bathrooms"
                  : "bathroom"}
              </p>
              <p className="text-gray-500">
                {room?.reviewCount}+ positive reviews
              </p>
              <p className="mt-1 font-semibold">
                ${Number(room?.price).toLocaleString("en-US")} a night
              </p>
            </div>
            <p className="flex items-center gap-1 text-sm">
              <Star className="h-3 w-3 text-black" weight="fill" />
              {room?.rating}
            </p>
          </div>
        </div>
      </Link>
    );
  }
);

Room.displayName = "Room";

export default Room;
