import React from "react";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import ChooseUpSection from "../components/ChooseUpSection";
import ExpenseSection from "../components/ExpenseSection";
import SolutionSection from "../components/SolutionSection";
import ArticleSection from "../components/ArticleSection";
import QuestionSection from "../components/QuestionSection";
import TrailSection from "../components/TrailSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ChooseUpSection />
      <ExpenseSection />
      <SolutionSection />
      <ArticleSection />
      <QuestionSection />
      <TrailSection />
      <ContactUs />
    </div>
  );
};

export default Home;
