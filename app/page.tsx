import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2 py-1 flex justify-between items-center">
          {/* Left side of the Navbar (Logo, title, or any other content) */}
          <div className="flex items-center">
            <Image
              src="/logo_dark_notenest.png" 
              alt="Logo"
              width={250}
              height={250}
            />
          </div>

          {/* Right side of the Navbar (Sign-up and Sign-in buttons) */}
          <div className="space-x-3 mr-5">
            <Link
              className={`py-3 px-3 text-sm ${buttonVariants({
                variant: "default",
              })} hover:scale-110 transform transition-transform`}
              href="/sign-up"
            >
              Sign-up
            </Link>
            <Link
              className={`py-2 px-1 text-sm ${buttonVariants({
                variant: "default",
              })} hover:scale-110 transform transition-transform`}
              href="/sign-in"
            >
              Sign-in
            </Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex min-h-screen flex-col bg-white px-8 pt-16">
        <h1 className="max-w-6xl py-1 pr-2 text-1xl font-small sm:text-2xl md:text-2xl lg:text-6xl text-center">
            Your Ideas, Documents, & Plans. Unified.<br></br>Welcome to{" "}
          <u>
            <b>NoteNest</b>
          </u>
        </h1>
        <div className="mt-8 flex gap-4">
          {/* Centered "Go to App" button */}
          <div className="flex justify-center w-full">
            <Link
              className={`py-3 px-5 ${buttonVariants({ variant: "default" })} hover:scale-110 transform transition-transform hover:bg-opacity-100`}
              href="/app"
            >
               Explore
              <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-2" // Adjust the size and margin as needed
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {" "}
          {/* Adjust the mt value to control spacing */}
          <Image
            src="/doodle_home.webp" // Replace with your image URL
            alt="Image Alt Text"
            width={800} // Adjust the width as needed
            height={150} // Adjust the height as needed
          />
        </div>
      </main>
    </div>
  );
}
