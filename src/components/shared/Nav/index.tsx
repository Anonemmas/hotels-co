import Image from "next/image";
import Link from "next/link";
import { List, UserCircle } from "phosphor-react";

import Logo from "assets/images/logo.png";

import SubNav from "./SubNav";

export default function MainNav({ variant }: { variant: "wide" | "narrow" }) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-20 max-h-[145px] w-full  text-sm">
        <div className="border-b border-gray-200 bg-white">
          <div
            className={`mx-auto ${
              variant === "narrow" ? "max-w-[1200px]" : "w-[90%] max-w-[2130px]"
            }`}
          >
            <div className="flex grid-cols-3 items-center justify-between py-4 lg:grid lg:px-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold text-primary lg:text-xl"
              >
                <Image
                  src={Logo}
                  alt="hotels&co logo"
                  className="h-7 w-6 lg:h-8 lg:w-7"
                />{" "}
                hotels&co
              </Link>
              <div
                className={`mx-auto hidden w-full  items-center justify-between lg:flex ${
                  variant !== "narrow" ? "max-w-[80%]" : "max-w-none"
                }`}
              >
                <Link href="/" className="font-semibold text-primary">
                  Rooms
                </Link>
                <span className="justify-items-center opacity-40">
                  Gyms & Spas
                </span>
                <span className="opacity-40">Meeting Rooms</span>
              </div>
              <button className="ml-auto flex max-w-fit items-center justify-end gap-2 rounded-full border px-3 py-1">
                <List className="h-4 w-4" />
                <UserCircle
                  className="h-8 w-8 text-primary lg:h-10 lg:w-10"
                  weight="fill"
                />
              </button>
            </div>
          </div>
        </div>
        <SubNav />
      </div>
    </>
  );
}
