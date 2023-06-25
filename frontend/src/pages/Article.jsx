import React from "react";
import { PsychologyArticle } from "../components/articles/PsychologyArticle";
import { RomanceArticle } from "../components/articles/RomanceArticle";
import { TechArticle } from "../components/articles/TechArticle";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";

const Article = () => {
  return (
    <>
      <Navbar />
      <main className="border-b mb-16">
        <article className="w-[80%] mx-auto py-16">
          <PsychologyArticle />
        </article>
      </main>
      {/* <main className="border-b mb-16">
        <article className="w-[80%] mx-auto py-16">
        <RomanceArticle />
        </article>
      </main>
      <main className="border-b mb-16">
        <article className="w-[80%] mx-auto py-16">
      <TechArticle />
        </article>
      </main> */}
      <Footer />
    </>
  );
};

export default Article;
