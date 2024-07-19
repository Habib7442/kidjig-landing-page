import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151515] relative">
      <div className="absolute inset-0">
        <Image
          src="/lines.png"
          alt="lines"
          width={1000}
          height={1000}
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="relative z-10 ">
        <div className="absolute top-1/2 right-[100px] -translate-y-1/2 w-1/2 h-[200px] bg-[rgba(16,28,92,0.64)] blur-[40px] rounded-l-full"></div>
      </div>
      <div className="relative z-20">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
