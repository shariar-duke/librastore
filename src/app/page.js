import Image from "next/image";
import backgroundImage from "../../public/home/book-bg.png";
export default function Home() {
  return (
    <div>
      <Image
        src={backgroundImage}
        fill
        alt="Background Image"
        size="100vw"
        style={{ objectFit: "cover" }}
      />
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
