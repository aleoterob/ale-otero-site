import type { Metadata } from "next";
import HeroHome from "./ui/hero-sections/hero-home";

export const metadata: Metadata = {
  title: "Home | Ale Otero Site",
  description: "Alejandro Otero Portfolio Site",
};

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center pb-8">
        <HeroHome />
      </main>
    </div>
  );
}
