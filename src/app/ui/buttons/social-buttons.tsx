"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const SocialButtons = () => {
  useEffect(() => {
    // Selecciona todas las imágenes
    const icons = document.querySelectorAll<HTMLImageElement>(".social-icon");

    // Funciones para manejar los eventos
    const handleMouseEnter = (event: Event) => {
      gsap.to(event.currentTarget, {
        scale: 1.2, // Amplía el tamaño al 120%
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (event: Event) => {
      gsap.to(event.currentTarget, {
        scale: 1, // Vuelve al tamaño original
        duration: 0.3,
        ease: "power2.out",
      });
    };

    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", handleMouseEnter);
      icon.addEventListener("mouseleave", handleMouseLeave);
    });

    // Limpia los event listeners al desmontar el componente
    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", handleMouseEnter);
        icon.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="flex flex-row gap-2">
      <Link href="https://www.linkedin.com/in/aleoterob/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin-icon.svg"
            alt="LinkedIn Icon"
            width={30}
            height={30}
            priority
            className="cursor-pointer social-icon w-9 sm:w-8 md:w-8 lg:w-8 xl:w-8 2xl:w-8"
          />
        </a>
      </Link>
      <Link href="https://github.com/aleoterob" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/github-icon.svg"
            alt="GitHub Icon"
            width={30}
            height={30}
            priority
            className="cursor-pointer social-icon w-9 sm:w-8 md:w-8 lg:w-8 xl:w-8 2xl:w-8"
          />
        </a>
      </Link>
      <Link href="https://www.behance.net/aleoterob" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/behance-icon.svg"
            alt="Behance Icon"
            width={30}
            height={30}
            priority
            className="cursor-pointer social-icon w-9 sm:w-8 md:w-8 lg:w-8 xl:w-8 2xl:w-8"
          />
        </a>
      </Link>
    </div>
  );
};

export default SocialButtons;
