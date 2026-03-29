import React from "react";
import About from "@/app/components/Home/About";
import Campuses from "@/app/components/Home/Campuses";
import ChooseUs from "@/app/components/Home/ChooseUs";
import EnrollmentSteps from "@/app/components/Home/EnrollmentSteps";
import HeroSection from "@/app/components/Home/HeroSection";
import Offerings from "@/app/components/Home/Offerings";
import Stats from "@/app/components/Home/Stats";
import { HealthcareToolsExplorer } from "@/app/components/Home/HealthcareToolsExplorer";

const page = () => {
  return (
    <>
      <HeroSection />
      <Campuses />
      <About />
      <HealthcareToolsExplorer />
      <EnrollmentSteps />
      <ChooseUs />
      <Offerings />
      <Stats />
    </>
  );
};

export default page;
