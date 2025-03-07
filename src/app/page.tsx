import Link from "next/link";

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
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))}
      </div>
    </main>
  );
}
