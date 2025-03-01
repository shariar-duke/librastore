"use client";
import Link from "next/link";

import {
  BookOpenIcon,
  CogIcon,
  CubeTransparentIcon,
  HomeIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "Settings", href: "/store/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

export default function NavLinks() {
  return (
    <nav className="flex flex-wrap md:flex-col gap-2 w-full">
      {links.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-gray-50 hover:bg-sky-100 hover:text-purple-600 transition-all duration-200 ease-in-out"
        >
          {/* for icon */}
          <Icon className="w-6" />

          {/* for label  */}
          <span className="hidden md:inline-block">{name}</span>
        </Link>
      ))}
    </nav>
  );
}
