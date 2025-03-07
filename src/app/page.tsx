import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  'https://lommqduyua.ufs.sh/f/qKdRrWtezHInKh9eSRbn3CI2PMhftO7sL8y5BmgFlrHNkJ6u',
  'https://lommqduyua.ufs.sh/f/qKdRrWtezHInFmpEHOAwoNnQaAyHSCWPlIiujbLq7XtpYrO2',
  'https://lommqduyua.ufs.sh/f/qKdRrWtezHIncVjhmsRdHgQ7smVr4053fvknMxGpBhNLZUYl',
  'https://lommqduyua.ufs.sh/f/qKdRrWtezHInB60JPB85CX3xmSETpvBNPKHAReoiygdV4F0z',
  'https://lommqduyua.ufs.sh/f/qKdRrWtezHIntxkS43VHzvrTnjyNlhgu5AVYIMSPXJfpEd8C',
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)
  return (
    <main className="">

      <div className="flex flex-wrap gap-4">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))}
      </div>
    </main>
  );
}
