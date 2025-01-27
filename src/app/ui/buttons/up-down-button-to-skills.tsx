import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const UpDownButtonToSkills = () => {
  const buttonRef = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null); // Referencia para la imagen

  useEffect(() => {
    if (buttonRef.current) {
      // Animación de subir y bajar con GSAP
      gsap.to(buttonRef.current, {
        y: -15, // Movimiento hacia arriba
        duration: 0.3, // Duración del movimiento
        ease: "power1.inOut", // Efecto ease
        yoyo: true, // Reversión
        repeat: -1, // Animación infinita
      });
    }

    // Agregar animación para el zoom in y zoom out en la imagen
    const image = imageRef.current;

    if (image) {
      image.addEventListener("mouseenter", () => {
        gsap.to(image, {
          scale: 1.15, // Zoom in
          duration: 0.3,
          ease: "power1.inOut",
        });
      });

      image.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1, // Zoom out
          duration: 0.3,
          ease: "power1.inOut",
        });
      });
    }

    // Limpiar los event listeners cuando el componente se desmonte
    return () => {
      if (image) {
        image.removeEventListener("mouseenter", () => {});
        image.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado
    gsap.to(window, {
      duration: 2, // Duración del desplazamiento
      scrollTo: "#skills-id", // ID del destino
      ease: "power1.inOut", // Efecto ease
    });
  };

  return (
    <Link
      href="/#skills-id"
      onClick={handleScroll}
      className="relative inline-block cursor-pointer"
    >
      <div ref={buttonRef}>
        <Image
          ref={imageRef} // Añadir la referencia a la imagen
          src="/images/down-arrow-icon.svg"
          alt="Up and Down Animation"
          width={50}
          height={50} // Ajusta la altura correctamente
          priority
          className="hover:opacity-80 transition-opacity duration-300"
        />
      </div>
    </Link>
  );
};

export default UpDownButtonToSkills;
