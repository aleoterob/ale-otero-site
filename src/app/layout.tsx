import type { Metadata } from "next";
import "./ui/globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import SlideMenu from "./ui/navigation/slide-menu";
import CursorPointer from "./ui/cursors/cursor-pointer";

export const metadata: Metadata = {
  title: "Home | Ale Otero Site",
  description: "Alejandro Otero Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-montserrat font-regular antialiased w-full">
        <header className="flex flex-col max-w-full items-center bg-transparent z-50">
          <Header />
          <SlideMenu />
        </header>
        {/* flex-grow in the main makes it occupy the available space between the header and the footer. */}
        <main className="flex flex-col flex-grow items-center max-w-full">
          {children}
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
        <CursorPointer />
      </body>
    </html>
  );
}
