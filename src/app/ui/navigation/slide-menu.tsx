"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap"; // Importar gsap

export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuIcon = document.querySelector(".menu-icon");
    if (menuIcon) {
      menuIcon.addEventListener("click", () => setIsOpen(true));
    }

    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener("click", () => setIsOpen(true));
      }
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Seleccionar todos los links dentro del menú
    const links = document.querySelectorAll(".menu-link");

    // Agregar animación con GSAP al hacer hover
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Limpiar eventos al desmontar
    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {
          gsap.to(link, { scale: 1.2, duration: 0.3, ease: "power2.out" });
        });
        link.removeEventListener("mouseleave", () => {
          gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    };
  }, []);

  return (
    <>
      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-background transition-transform duration-1000 ease-in-out w-96 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Contenido del Slide Menu */}
        <div className="px-8 py-4 flex flex-col h-full menu-container bg-negroSlideMenu shadow-2xl shadow-negroPuro">
          {/* Botón de cerrar */}
          <div className="flex justify-end">
            <Image
              src="/images/close-icon.svg"
              alt="Close Icon"
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          <Link
            href="/"
            className="p-1 text-3xl text-foreground hover:text-verdeAle menu-link"
            onClick={handleLinkClick}
          >
            HOME
          </Link>
          <Link
            href="/#about-me-id"
            className="p-1 text-3xl text-foreground hover:text-verdeAle menu-link"
            onClick={handleLinkClick}
          >
            ABOUT ME
          </Link>
          <Link
            href="/portfolio"
            className="p-1 text-3xl text-foreground hover:text-verdeAle menu-link"
            onClick={handleLinkClick}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className="p-1 text-3xl text-foreground hover:text-verdeAle menu-link"
            onClick={handleLinkClick}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}
