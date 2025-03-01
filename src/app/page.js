import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/home/book-bg.png";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        src={backgroundImage}
        alt="Background Image"
        fill
      />

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center bg-white/80 backdrop-blur-lg rounded-lg p-6 shadow-xl z-10 lg:w-2/5 w-11/12 h-auto text-center">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 pb-4 text-5xl font-bold text-purple-800">
          <SparklesIcon className="w-14 h-14 text-purple-700 animate-spin-slow" />
          <p>Litloop</p>
        </div>

        {/* CTA Button */}
        <Link
          className="mt-4 bg-purple-700 text-white rounded-md px-5 py-3 text-lg font-medium shadow-md transition-all duration-300 hover:bg-purple-800 hover:scale-105"
          href="/store"
        >
          Take me to the Store
        </Link>
      </div>

      {/* <Image
  src={backgroundImage}
  fill
  alt="Background Image"
  className="object-cover w-full h-full"
/> */}
    </div>
  );
}
