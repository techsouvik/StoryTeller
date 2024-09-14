import GetStarted from "@/components/GetStarted";
import { auth } from "@/utils/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user?.email) {
    return redirect("/createStory");
  }

  console.log(session);

  return (
    <main className="flex flex-col justify-center items-center mt-20">
      <div className="bg-gradient-to-br from-green-800 to-green-950 text-transparent text-center  bg-clip-text">
        <div className="text-7xl font-light">Spark the love of </div>
        <div className="font-semibold text-7xl mt-2">
          bed time stories with AI
        </div>
      </div>
      <div className="mt-10 w-[40vw] text-center text-lg">
        Create magical moments with your child by making magical bed time
        stories about them, their toys and their characters.
      </div>
      <GetStarted />
      <Image
        width={800}
        height={800}
        className=" rounded-2xl shadow-lg  mt-10"
        src={
          "https://utfs.io/f/V7kCML5PZ5mcqM9hO5xTG6Nv7mYHjeBfpOxrt4hPMkgZUX5S"
        }
        alt="Hero Image"
      />
    </main>
  );
}
