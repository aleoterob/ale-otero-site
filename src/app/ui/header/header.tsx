"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function Header() {
  const menuIconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Efecto hover para zoom in con GSAP
    const handleHoverIn = () => {
      gsap.to(menuIconRef.current, {
        scale: 1.2, // Escala de la imagen al hacer hover (zoom in)
        duration: 0.3, // Duración de la animación
        ease: "power1.out", // Tipo de easing
      });
    };

    const handleHoverOut = () => {
      gsap.to(menuIconRef.current, {
        scale: 1, // Vuelve al tamaño original
        duration: 0.3, // Duración de la animación
        ease: "power1.out", // Tipo de easing
      });
    };

    const element = menuIconRef.current;
    // Agregar eventos de hover
    if (element) {
      element.addEventListener("mouseenter", handleHoverIn);
      element.addEventListener("mouseleave", handleHoverOut);
    }

    // Limpiar eventos al desmontar el componente
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleHoverIn);
        element.removeEventListener("mouseleave", handleHoverOut);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-row justify-between py-6 w-90%  sm:w-90%  md:w-90% lg:w-90 xl:w-90 2xl:w-1490"
      id="home-top-id"
    >
      <Link href={"/"} className="flex items-center">
        <Image
          src="/images/logo-ale-otero-web-blanco-roboto.svg"
          width={180}
          height={1}
          alt="Logo"
        />
      </Link>
      <Link href={"#"} className="flex items-center">
        <Image
          ref={menuIconRef} // Añadido ref aquí
          src="/images/menu-icon-white.svg"
          width={25}
          height={1}
          alt="Menu Icon"
          className="menu-icon"
        />
      </Link>
    </div>
  );
}
