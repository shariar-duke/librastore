import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function SideBar() {
  return (
    <div>
      <Link
        href="/store"
        className="bg-purple-500 flex h-14 items-center justify-start rounded-md p-4"
      >
        <div className="w-32 md:w-40 ">
          <Logo />
        </div>
      </Link>
      <div>
        <NavLinks />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <ArrowLeftOnRectangleIcon className="w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}
