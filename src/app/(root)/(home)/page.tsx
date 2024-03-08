// import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h1-bold">
      <UserButton />

      HELLO i am herer
    </div>
  );
}
