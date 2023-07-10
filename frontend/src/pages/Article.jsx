import React from "react";
import { PsychologyArticle } from "../components/articles/PsychologyArticle";
import { RomanceArticle } from "../components/articles/RomanceArticle";
import { TechArticle } from "../components/articles/TechArticle";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import { useFetchSingleArticle } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  

  const articleId = id;
  const { data, loading, error } = useFetchSingleArticle(
    import.meta.env.VITE_APP_API_URL + "/articles/singleArticle",
    {
      articleId,
      
    }
  );
  return (
    <>
      <Navbar />
      {data.category === "Psychology" ? (
        <main className="border-b mb-16">
          <article className="w-[80%] md:w-[70%] mx-auto py-16">
            <PsychologyArticle data={data}/>
          </article>
        </main>
      ) : data.category === "Romance" ? (
        <main className="border-b mb-16">
          <article className="w-[80%] mx-auto py-16">
            <RomanceArticle data={data}/>
          </article>
        </main>
      ) : data.category === "Technology" ? (
        <main className="border-b mb-16">
          <article className="w-[80%] mx-auto py-16">
            <TechArticle data={data}/>
          </article>
        </main>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default Article;
