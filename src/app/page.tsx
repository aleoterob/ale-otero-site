import type { Metadata } from "next";
import Image from "next/image";
import HeroHome from "./ui/hero-sections/hero-home";

export const metadata: Metadata = {
  title: "Home | Ale Otero Site",
  description: "Alejandro Otero Portfolio Site",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-8 w-full">
      <HeroHome />
      <div className="text-7xl flex flex-col text-right w-1490  w-1490">
        <h1 className="font-montserrat font-bold">PRESENTATION</h1>
        <div className="flex flex-row gap-10 pt-16">
          <Image
            className="hero-image rounded-lg"
            src="/images/imagen-ale-hero.jpg"
            alt="Hero home image"
            width={450}
            height={1}
          />
          <div className="flex flex-col ">
            <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
              My name is Alejandro Otero, I was born in Argentina and I'm fourty
              five years old. I've been working as Front End and Web developer
              for the last six years. My experience also include six years as
              Java backend developer. I've studied the carrer of Multiplatform
              Application Development on IES Fernando Wirtz Suarez of La Coruña,
              Spain.
            </p>
            <br></br>
            <br></br>
            <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
              Since 2018, I have specialized in Front End Development and
              Designing, with a particular focus on React and Next.js, which I
              use extensively to craft responsive, visually appealing designs.
              Additionally, I work with a wide range of technologies, including
              HTML5 (I focus on the use of Flexbox Model), CSS3 (Tailwind
              framework and SASS processor included), JavaScript and TypeScript,
              Vue and Angular, jQuery, BootStrap and REST and SOAP Consuption,
              among other technologies. Also, I have 6 years of experience with
              different CMSs, mainly with Wordpress, but also with Shopify,
              Webflow, Wix, Drupal and Joomla. I also would like to mention that
              I have nine years of experience with GIT and GIT repositories like
              GitHub and BitBucket. Currently, I'm learning React Native, which
              I hope to master soon.
            </p>
            <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
              The main tools I use for design are Figma, XD, Photoshop and
              Illustrator with a particular focus on Figma.
            </p>
            <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
              Regarding to the methodologies I have worked with, I have nine
              years of experience with Agile, mainly with Scrum, but also with
              Kanban and XP, among others. For project task management I've been
              using Jira all my carreer, but also Asana, Coda and Trello.
            </p>
            <p className="text-lg" style={{ lineHeight: "1.300" }}>
              Beyond my technical proficiency, I am passionate about blending
              clean code with visually impactful designs to build solutions that
              are highly functional, user-friendly and full responsive. I pride
              myself on maintaining clear communication and consistently
              delivering high-quality work on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
