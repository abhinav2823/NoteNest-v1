import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function AppLayout(props: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col pl-72">
      <Sidebar />
      <div className="flex justify-end">
            {/* You can replace this with your logo component */}
            <Image
              src="/logo_dark_notenest.png" // Replace with your image URL
              alt="Logo"
              width={150}
              height={150}
              //className="w-40 h-15 mr-2"
            />
          </div>
      {props.children}
    </main>
  );
}