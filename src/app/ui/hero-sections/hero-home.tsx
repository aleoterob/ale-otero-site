"use client";

import { useEffect } from "react";
import gsap from "gsap";
import UpDownButtonToAboutMe from "../buttons/up-down-button-to-about-me";
import SocialButtons from "../buttons/social-buttons";
import PortfolioButton from "../buttons/portfolio-button";

const HeroHome = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(".my", {
        x: "-100%", // Mueve desde fuera de la pantalla a la izquierda
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        ".personal",
        {
          x: "100%", // Mueve desde fuera de la pantalla a la derecha
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5" // Superpone la animación con 0.5 segundos de retraso
      )
      .from(
        ".portfolio",
        {
          x: "-100%", // Mueve desde fuera de la pantalla a la izquierda
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".site",
        {
          y: "100%", // Mueve desde fuera de la pantalla por abajo
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full hero-home-container -mt-75">
      <div className="flex flex-col gap-10 flex-wrap justify-start items-center h-screen w-full">
        <div className="flex flex-row justify-end items-end w-full pt-24 z-10">
          <SocialButtons />
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 w-full object-cover h-screen"
        >
          <source src="/videos/uhd_30fps.mp4" type="video/mp4" />
        </video>
        <div
          className="flex flex-row items-start justify-start text-8xl font-montserrat font-bold pt-16 w-full"
          style={{ lineHeight: "0.90" }}
        >
          <div className="flex flex-col justify-start items-start w-full pl-60">
            <p className="my">MY</p>
            <p className="personal">PERSONAL</p>
            <p className="portfolio">PORTFOLIO</p>
            <p className="site text-verdeAle font-bold">SITE</p>
          </div>
        </div>

        <div className="flex flex-row text-right justify-between w-full z-20 pt-32">
          <div className="flex flex-col text-left">
            <PortfolioButton />
          </div>
          <div className="flex flex-col pt-24">
            <UpDownButtonToAboutMe />
          </div>

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
