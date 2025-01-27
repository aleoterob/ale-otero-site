import type { Metadata } from "next";
import ContactForm from "../ui/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact | Ale Otero Site",
  description: "Alejandro Otero Portfolio Site",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] pb-10">
      <h1 className="pt-12 text-4xl sm:text-6xl md:text-6xl lg:text-6xl  xl:text-8xl text-center">
        Contact
      </h1>
      <h1 className="pt-4  pb-6 text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-center">
        Metadata is good. Metadata helps us.
      </h1>
      <ContactForm />
    </div>
  );
}
