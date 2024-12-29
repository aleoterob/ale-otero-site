"use client";

import { useEffect } from "react";
import gsap from "gsap";

const HeroHome = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const alejandro = document.querySelector(".alejandro");
      const otero = document.querySelector(".otero");
      const portfolio = document.querySelector(".portfolio");
      const site = document.querySelector(".site");

      console.log("alejandro:", alejandro);
      console.log("otero:", otero);
      console.log("portfolio:", portfolio);
      console.log("site:", site);

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });

      // Configuración inicial
      gsap.set(alejandro, { xPercent: -101, autoAlpha: 0 });
      gsap.set(otero, { xPercent: 101, autoAlpha: 0 });
      gsap.set(portfolio, { xPercent: 101, autoAlpha: 0 });
      gsap.set(site, { xPercent: 101, autoAlpha: 0 });

      // Animaciones
      tl.to(alejandro, { xPercent: 0, autoAlpha: 1 })
        .to(otero, { xPercent: 0, autoAlpha: 1 }, "-=0.5")
        .to(portfolio, { xPercent: 0, autoAlpha: 1 }, "-=0.3")
        .to(site, { xPercent: 0, autoAlpha: 1 }, "-=0.3");
    } else {
      console.error("One or more elements are not found in the DOM.");
    }
  }, []);

  return (
    <div className="text-right text-9xl">
      <p className="alejandro font-light">
        <span>alejandro</span>
        <span className="font-bold otero">otero</span>
      </p>
      <p className="portfolio font-light">
        <span>portfolio</span>
        <span className="text-verdeAle font-bold site">site</span>
      </p>
    </div>
  );
};

export default HeroHome;
