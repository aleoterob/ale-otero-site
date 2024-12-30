import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const UpDownButtonToAboutMe = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      // Animación con GSAP
      gsap.to(buttonRef.current, {
        y: -15, // Movimiento hacia arriba
        duration: 0.3, // Duración del movimiento
        ease: "power1.inOut", // Efecto ease
        yoyo: true, // Reversión
        repeat: -1, // Animación infinita
      });
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado
    gsap.to(window, {
      duration: 2, // Duración del desplazamiento
      scrollTo: "#about-me-id", // ID del destino
      ease: "power1.inOut", // Efecto ease
    });
  };

  return (
    <Link href="/#about-me-id" legacyBehavior>
      <a
        onClick={handleScroll}
        className="relative inline-block cursor-pointer"
      >
        <div ref={buttonRef}>
          <Image
            src="/images/down-arrow-icon.svg"
            alt="Up and Down Animation"
            width={50}
            height={50}
            priority
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </div>
      </a>
    </Link>
  );
};

export default UpDownButtonToAboutMe;
