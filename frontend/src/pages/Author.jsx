import React from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import { ArticlesList } from "../components/ArticlesList";

const Author = () => {
  const personalArticles = [1, 2];
  return (
    <>
      <Navbar />
      <div className="border-b flex justify-center items-center py-16 mb-16">
        <div className="w-[80%] md:w-[60%] flex flex-col items-center text-center gap-6">
          <img className="rounded-full" src="http://0.gravatar.com/avatar/f44e7d18176511aed07496128445e855?s=150&d=mm&r=g" />
          <h2 className="font-semibold text-xl">Logan Xavier</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum
            laboriosam libero amet sapiente consequuntur omnis autem tempora
            modi laborum.
          </p>
        </div>
      </div>
      <ArticlesList articles={personalArticles} />
      <Footer />
    </>
  );
};

export default Author;
