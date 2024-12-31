"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const SocialButtons = () => {
  useEffect(() => {
    // Selecciona todas las imágenes
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach((icon) => {
      // Zoom in en hover
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2, // Amplía el tamaño al 120%
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Restaurar tamaño original al salir del hover
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1, // Vuelve al tamaño original
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Limpia los event listeners al desmontar el componente
    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", null);
        icon.removeEventListener("mouseleave", null);
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
            className="cursor-pointer social-icon"
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
            className="cursor-pointer social-icon"
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
            className="cursor-pointer social-icon"
          />
        </a>
      </Link>
    </div>
  );
};

export default SocialButtons;
