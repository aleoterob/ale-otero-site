"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./hero-home.css";

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
    <div className="animation-wrapper" ref={boxRef}>
      <p className="one" ref={boxRef}>
        <span ref={boxRef}>alejandro</span>
        <a href="#about">otero</a>
      </p>
      <p className="two" ref={boxRef}>
        <span ref={boxRef}>portfolio</span>
        <span className="site" ref={boxRef}>
          site
        </span>
      </p>
    </div>
  );
};

export default HeroHome;
