import type { Metadata } from "next";
import "./ui/globals.css";
import Header from "./ui/header/header";
import SlideMenu from "./ui/navigation/slide-menu";

export const metadata: Metadata = {
  title: "Ale Otero Site",
  description: "Alejandro Otero Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-montserrat font-regular antialiased items-center justify-center">
        <header className="w-full bg-background">
          <Header />
          <SlideMenu />
        </header>
        {/* flex-grow in the main makes it occupy the available space between the header and the footer. */}
        <main className="flex flex-grow items-center justify-center">
          {children}
        </main>
        <footer className="w-full bg-background text-foreground text-xs py-4 text-center border-t border-greyVercel border-solid">
          © 2024 Alejandro Otero
        </footer>
      </body>
    </html>
  );
}
