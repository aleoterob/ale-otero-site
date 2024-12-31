"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";

const CursorPointer = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    const updateCursor = () => {
      // Mantener un suavizado moderado con divisor ajustado
      const speed = 4; // Ajusta esta velocidad para controlar el retraso
      posX += (mouseX - posX) / speed;
      posY += (mouseY - posY) / speed;

      // Actualiza la posición del follower con gsap para un movimiento suave
      gsap.set(follower, {
        x: posX - 15, // Restamos 15 para centrar el follower en el cursor
        y: posY - 15,
      });

      // Movimiento del cursor principal
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });

      // Continuar la animación de actualización
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    updateCursor();

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div className="cursor fixed w-2.5 h-2.5  bg-verdeAle opacity-50 rounded-full pointer-events-none z-[10000]"></div>
      <div className="cursor-follower fixed w-8 h-8 border-2 opacity-50 border-verdeAle rounded-full pointer-events-none z-[9999]"></div>
    </>
  );
};

export default CursorPointer;
