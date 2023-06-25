import React from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import { ArticlesList } from "../components/ArticlesList";
import { Carousel } from "../components/Carousel";

const HomePage = () => {
  const sliderData = [1, 2, 3];
  const articles = [1,2,3,4,5];
  return (
    <section className="w-full">
      <Navbar />
      <main className="w-full flex flex-col">
        <Carousel />
        <ArticlesList articles={articles} />
      </main>

      <Footer />
    </section>
  );
};

export default HomePage;
