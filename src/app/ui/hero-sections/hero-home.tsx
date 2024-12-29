"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroHome = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lineOne = document.querySelector(".one");
      const lineTwo = document.querySelector(".two");
      const siteWord = document.querySelector(".site");
      const allLinks = gsap.utils.toArray("p a");

      console.log("lineOne:", lineOne);
      console.log("lineTwo:", lineTwo);
      console.log("siteWord:", siteWord);
      console.log("allLinks:", allLinks);

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });

      // Configuración inicial
      gsap.set([lineOne], { xPercent: -101, autoAlpha: 0 });
      gsap.set(lineTwo, { xPercent: 101, autoAlpha: 0 });
      gsap.set(siteWord, { xPercent: 101, autoAlpha: 0 });
      gsap.set(allLinks, {
        y: -100,
        autoAlpha: 0,
        scale: 1.5,
        rotationX: 45,
      });

      // Animaciones
      tl.to(lineOne, { xPercent: 0, autoAlpha: 1 })
        .to(lineTwo, { xPercent: 0, autoAlpha: 1 }, "-=0.5")
        .to(siteWord, { xPercent: 0, autoAlpha: 1 }, "-=0.3")
        .to(allLinks, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          stagger: 0.4,
          rotationX: 0,
        });
    } else {
      console.error("One or more elements are not found in the DOM.");
    }
  }, []);

  return (
    <div
      className="text-right  text-white font-montserrat font-light text-[110px] pt-[10vh] h-screen uppercase overflow-hidden [perspective:1000px]"
      ref={boxRef}
    >
      <p className="block whitespace-nowrap m-0 one" ref={boxRef}>
        <span ref={boxRef}>alejandro</span>
        <a
          href="#about"
          className="text-white no-underline inline-block font-bold"
        >
          otero
        </a>
      </p>
      <p className="block whitespace-nowrap m-0 two" ref={boxRef}>
        <span ref={boxRef}>portfolio</span>
        <span
          className="text-[#47cca5] no-underline inline-block font-bold site"
          ref={boxRef}
        >
          site
        </span>
      </p>
    </div>
  );
};

export default HeroHome;
