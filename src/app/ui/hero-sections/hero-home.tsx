"use client";

import { useEffect } from "react";
import Image from "next/image"; // Asegúrate de que esta importación esté presente y sin conflictos
import gsap from "gsap";
import UpDownButtonToAboutMe from "../buttons/up-down-button-to-about-me";

const HeroHome = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const heroImage = document.querySelector(".hero-image");
      const my = document.querySelector(".my");
      const personal = document.querySelector(".personal");
      const portfolio = document.querySelector(".portfolio");
      const site = document.querySelector(".site");

      console.log("heroImage:", heroImage);
      console.log("my:", my);
      console.log("personal:", personal);
      console.log("portfolio:", portfolio);
      console.log("site:", site);

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });

      // Configuración inicial
      gsap.set(heroImage, { xPercent: -101, autoAlpha: 0 });
      gsap.set(my, { xPercent: -101, autoAlpha: 0 });
      gsap.set(personal, { xPercent: 101, autoAlpha: 0 });
      gsap.set(portfolio, { xPercent: 101, autoAlpha: 0 });
      gsap.set(site, { xPercent: 101, autoAlpha: 0 });

      // Animaciones
      tl.to(heroImage, { xPercent: 0, autoAlpha: 1 })
        .to(my, { xPercent: 0, autoAlpha: 1 })
        .to(personal, { xPercent: 0, autoAlpha: 1 }, "-=0.5")
        .to(portfolio, { xPercent: 0, autoAlpha: 1 }, "-=0.3")
        .to(site, { xPercent: 0, autoAlpha: 1 }, "-=0.3");
    } else {
      console.error("One or more elements are not found in the DOM.");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  w-1490  z-40 hero-home-container">
      <div className="flex flex-row gap-10 flex-wrap  justify-center items-center z-30 h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 w-full object-cover opacity-25 z-0 h-screen"
        >
          <source src="/videos/uhd_30fps.mp4" type="video/mp4" />
        </video>
        <div
          className="flex flex-col justify-center text-left text-8xl font-montserrat font-bold pt-56"
          style={{ lineHeight: "0.90" }}
        >
          <p className="my">MY</p>
          <p className="personal">PERSONAL</p>
          <p className="portfolio">PORTFOLIO</p>
          <p className="site text-verdeAle font-bold">SITE</p>
        </div>
        <div>
          <Image
            className="hero-image rounded-lg"
            src=""
            alt="Hero home image"
            width={400}
            height={1}
          />
        </div>
        <div className="flex flex-row text-right justify-between items-end w-full pt-14">
          <div className="flex flex-col text-left">
            <p>PORTFOLIO</p>
          </div>
          <UpDownButtonToAboutMe />
          <div className="flex flex-col">
            <p>next.js</p>
            <p>gsap.js</p>
            <p>chart.js</p>
            <p>tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
