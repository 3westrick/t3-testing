"use client"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    const router = useRouter();
    return (
        <div className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
            <div>Gallery</div>
            <div>
                {/* <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton 
                    endpoint="imageUpload" 
                        onClientUploadComplete={() => router.refresh()}/>
                    <UserButton />
                </SignedIn> */}
            </div>
        </div>
    )
}