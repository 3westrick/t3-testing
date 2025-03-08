import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getUserImage } from "~/server/queries";


export const dynamic = "force-dynamic";

async function Images(){
  const images = await getUserImage();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48 flex flex-col">
          <Link href={`/img/${image.id}`}>
          <Image 
          src={image.url} 
          alt="image" 
          width={480}
          height={480}
          />
          <div>{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
