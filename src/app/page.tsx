import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Ale Otero Site",
  description: "Alejandro Otero Portfolio Site",
};

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center pb-8">
        <h1 className="pt-12 text-4xl sm:text-6xl md:text-6xl lg:text-6xl  xl:text-8xl text-center">
          Ale Otero Site
        </h1>
        <h1 className="pt-4  pb-6 text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-center">
          My Personal Portfolio Site
        </h1>
        <div className="flex flex-row gap-10 flex-wrap justify-center"></div>
      </main>
    </div>
  );
}
