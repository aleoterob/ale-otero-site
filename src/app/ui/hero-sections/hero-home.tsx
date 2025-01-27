"use client";

import { useEffect } from "react";
import gsap from "gsap";
import UpDownButtonToAboutMe from "../buttons/up-down-button-to-about-me";
import SocialButtons from "../buttons/social-buttons";
import PortfolioButton from "../buttons/portfolio-button";

const HeroHome = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Función para observar los elementos y ejecutar animaciones
      const observeAndAnimate = (selector: string, animation: () => void) => {
        const element = document.querySelector(selector);

        if (element) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                animation(); // Ejecuta la animación
                observer.unobserve(entry.target); // Deja de observar después de la animación
              }
            },
            { threshold: 0.5 } // Activa cuando el 50% del elemento es visible
          );

          observer.observe(element);
        }
      };

      // Animación en cadena con timeline
      const animateText = () => {
        const tl = gsap.timeline();

        tl.fromTo(
          ".my",
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
        )
          .fromTo(
            ".personal",
            { x: "100%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
            ">-0.5"
          )
          .fromTo(
            ".portfolio",
            { x: "-100%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
            ">-0.5"
          )
          .fromTo(
            ".site",
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, ease: "power2.out" },
            ">-0.5"
          );
      };

      // Animación para la imagen principal con más fade in
      const heroImageAnimation = () =>
        gsap.fromTo(
          ".ale-image",
          { x: "-100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            delay: 0.5,
            onComplete: () => {
              // Fade in adicional luego del slide-in
              gsap.to(".ale-image", { opacity: 1, duration: 1 });
            },
          }
        );

      // Observa cada elemento y aplica la animación correspondiente
      observeAndAnimate(".ale-image", heroImageAnimation);
      observeAndAnimate(".my", animateText);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center hero-home-container w-full">
      <div className="flex flex-col gap-10 flex-wrap justify-start items-center h-600 sm:h-700 md:h-screen lg:h-screen xl:h-screen 2xl:h-screen w-full">
        <div className="flex flex-row justify-end items-end w-full pt-24 z-10">
          <SocialButtons />
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 w-full object-cover h-600 sm:h-700 md:h-screen lg:h-screen xl:h-screen 2xl:h-screen"
        >
          <source src="/videos/uhd_30fps.mp4" type="video/mp4" />
        </video>
        <div
          className="flex flex-row items-start justify-start  font-montserrat font-bold  w-full text-6xl sm:text-6xl  md:text-8xl lg:text-8xl xl:text-8xl"
          style={{ lineHeight: "0.90" }}
        >
          <div className="flex flex-col justify-start items-start w-full pl-0 sm:pl-0 md:pl-10 lg:pl-20 xl:pl-60 2xl:pl-60">
            <p className="my">MY</p>
            <p className="personal">PERSONAL</p>
            <p className="portfolio">PORTFOLIO</p>
            <p className="site text-verdeAle font-bold">SITE</p>
          </div>
        </div>

        <div className="flex flex-row text-right justify-between w-full z-20 pt-6 sm:pt-32  md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-32 sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <div className="flex flex-col text-left">
            <PortfolioButton />
          </div>
          <div className=" flex-col pt-24 sm:pt-8 md:pt-24 lg:pt-24 xl:pt-24 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
            <UpDownButtonToAboutMe />
          </div>

          <div className="flex flex-col">
            <p>Astro</p>
            <p>Gsap.js</p>
            <p>Chart.js</p>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
