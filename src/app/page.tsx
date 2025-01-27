"use client";

import Image from "next/image";
import HeroHome from "./ui/hero-sections/hero-home";
import UpDownButtonToSkills from "./ui/buttons/up-down-button-to-skills";
import UpDownButtonToLastSkills from "./ui/buttons/up-down-button-to-last-skills";
import UpDownButtonToTop from "./ui/buttons/up-down-button-to-top";
import ProgrammingSkillsChart from "./ui/charts/programming-skills-chart";
import DesignSkillsChart from "./ui/charts/design-skills-chart";
import CmsSkillsChart from "./ui/charts/cms-skills-chart";
import WordpressSkillsChart from "./ui/charts/wordpress-skills-chart";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-start sm:items-center pb-20 w-90%  sm:w-90%  md:w-90% lg:w-90 xl:w-90 2xl:w-1490">
        <div className="flex flex-col items-center ">
          <HeroHome />
          <div
            className="flex flex-col text-right  pt-14 sm:pt-10 md:pt-10 lg:pt-10 xl:pt-14 2xl:pt-16 "
            id="about-me-id"
          >
            <h1 className="text-6xl  sm:7xl md:7xl lg7xl: xl:7xl 2xl:7xl font-montserrat font-bold">
              ABOUT ME
            </h1>
            <div className="flex flex-row justify-center gap-10 pt-12 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap">
              <Image
                className="ale-image rounded-lg opacity-0 w-full md:w-auto lg:w-500 h-500 sm:h-600 md:h-500 lg:h-500"
                src="/images/imagen-ale-hero.jpg"
                alt="Hero home image"
                width={450}
                height={450}
              />
              <div className="flex flex-col font-light">
                <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
                  My name is Alejandro Otero, I was born in Argentina and I am
                  fourty five years old. I have been working as Front End and
                  Web developer for the last six years. My experience also
                  include six years as Java backend developer. I have studied
                  the carrer of Multiplatform Application Development on IES
                  Fernando Wirtz Suarez of La Coruña, Spain.
                </p>
                <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
                  Since 2018, I have specialized in Front End Development and
                  Designing, with a particular focus on React and Next.js, which
                  I use extensively to craft responsive, visually appealing
                  designs. Additionally, I work with a wide range of
                  technologies, including HTML5 (I focus on the use of Flexbox
                  Model), CSS3 (Tailwind framework and SASS processor included),
                  JavaScript and TypeScript, Vue and Angular, jQuery, BootStrap
                  and REST and SOAP Consuption, among other technologies. Also,
                  I have 6 years of experience with different CMSs, mainly with
                  Wordpress, but also with Shopify, Webflow, Wix, Drupal and
                  Joomla. I also would like to mention that I have nine years of
                  experience with GIT and GIT repositories like GitHub and
                  BitBucket. Currently, I am learning React Native, which I hope
                  to master soon.
                </p>
                <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
                  The main tools I use for design are Figma, XD, Photoshop and
                  Illustrator with a particular focus on Figma.
                </p>
                <p className="text-lg pb-4" style={{ lineHeight: "1.300" }}>
                  Regarding to the methodologies I have worked with, I have nine
                  years of experience with Agile, mainly with Scrum, but also
                  with Kanban and XP, among others. For project task management
                  I have been using Jira all my carreer, but also Asana, Coda
                  and Trello.
                </p>
                <p className="text-lg" style={{ lineHeight: "1.300" }}>
                  Beyond my technical proficiency, I am passionate about
                  blending clean code with visually impactful designs to build
                  solutions that are highly functional, user-friendly and full
                  responsive. I pride myself on maintaining clear communication
                  and consistently delivering high-quality work on time.
                </p>
              </div>
            </div>
            <div className="flex-col h-full items-center pt-36 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
              <UpDownButtonToSkills />
            </div>
            <div className="flex flex-col pt-14" id="skills-id">
              <h1 className="text-6xl  sm:7xl md:7xl lg7xl: xl:7xl 2xl:7xl font-montserrat font-bold pb-12">
                SKILLS
              </h1>
              <div className="flex flex-row w-full">
                <div className=" w-full">
                  <ProgrammingSkillsChart />
                </div>
                <div className=" w-full">
                  <DesignSkillsChart />
                </div>
              </div>
              <div className="flex-col h-full items-center pt-6 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                <UpDownButtonToLastSkills />
              </div>
              <div
                className="flex flex-row w-full pt-20 pb-4"
                id="last-skills-id"
              >
                <div className=" w-full">
                  <CmsSkillsChart />
                </div>
                <div className=" w-full">
                  <WordpressSkillsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col w-full items-end pb-6 pr-10 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
        <UpDownButtonToTop />
      </div>
    </div>
  );
}
