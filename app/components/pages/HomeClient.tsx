"use client";

import { KodakImageMarquee } from "../common/KodakImageMarquee";
import { AboutSection } from "../unique/AboutSection";
import { CategoriesSection } from "../unique/CategoriesSection";
import { Hero } from "../unique/Hero";
import { SpotsOfHonorSection } from "../unique/SpotsOfHonor";
import { TiersSection } from "../unique/TiersSelection";

const imgArrOne = [
  "/images/levels/_1/img-5.JPG",
  "/images/levels/_1/img-8.JPG",
  "/images/levels/_1/img-17.JPG",
  "/images/levels/_1/img-18.JPG",
  "/images/levels/_1/img-19.WEBP",
  "/images/levels/_1/img-20.JPG",
  "/images/levels/_1/img-21.JPG",
  "/images/levels/_1/img-22.JPG",
  "/images/levels/_1/img-23.JPG",
  "/images/levels/_1/img-24.JPG",
];

export function HomeClient() {
  return (
    <div className="flex flex-col gap-y-24 mb-20">
      <Hero />
      <div className="px-4">
        <KodakImageMarquee images={imgArrOne} direction="right" speed={50} />
      </div>
      <AboutSection />
      <TiersSection />
      <CategoriesSection />
      <SpotsOfHonorSection />
    </div>
  );
}
