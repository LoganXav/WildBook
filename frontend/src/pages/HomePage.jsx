import React from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import { ArticlesList } from "../components/ArticlesList";
import { useFetchArticleCovers } from "../hooks/useFetch";
import { Carousel } from "../components/Carousel";

const HomePage = () => {

  const { data, loading, error } = useFetchArticleCovers(
    import.meta.env.VITE_APP_API_URL + "/articles/covers"
  );


  return (
    <section className="w-full">
      <Navbar />
      <main className="w-full flex flex-col">
        <Carousel data={data} loading={loading} error={error} />
        <ArticlesList data={data} loading={loading} error={error} />
      </main>

      <Footer />
    </section>
  );
};

export default HomePage;
