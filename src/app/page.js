import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/home/book-bg.png";
export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <Image
        className="blur-sm"
        src={backgroundImage}
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 z-10 lg:w-2/5 h-1/4">
        <div className="flex pb-5 mb-5 text-5xl text-purpule-800">
          <SparklesIcon className="w-12 h-12" />
          <p>Litloop</p>
        </div>
        <div>
          <Link
            className="bg-purple-700 text-white rounded-sm p-2"
            href="/store"
          >
            Take me to the Store
          </Link>
        </div>
      </div>

      {/* 
      I can write this in this syntax as well  */}

      {/* <Image
  src={backgroundImage}
  fill
  alt="Background Image"
  className="object-cover w-full h-full"
/> */}
    </div>
  );
}
