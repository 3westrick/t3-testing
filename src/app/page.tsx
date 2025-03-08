import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getUserImage } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImage();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {[
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,
        ...images,

        ...images,

        ...images,

        ...images,
      ].map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col p-4">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt="image" width={480} height={480} />
            <div>{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
