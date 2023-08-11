import React from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import { ArticlesList } from "../components/ArticlesList";
import { useFetchArticleCovers } from "../hooks/useFetch";

const Author = () => {
  const { data, loading, error } = useFetchArticleCovers(
    import.meta.env.VITE_APP_API_URL + "/articles/covers"
  );
  return (
    <>
      <Navbar />
      <div className="border-b flex justify-center items-center py-16 mb-16">
        <div className="w-[80%] md:w-[60%] flex flex-col items-center text-center gap-6">
          <img
            className="rounded-full"
            src="http://0.gravatar.com/avatar/f44e7d18176511aed07496128445e855?s=150&d=mm&r=g"
          />
          <h2 className="font-semibold text-2xl sm:text-xl">Logan Xavier</h2>
          <p className="sm:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            expedita fugit eius necessitatibus dolor debitis nulla vel et, quia
            consequuntur error maxime ducimus excepturi repudiandae sapiente
            tenetur in qui recusandae vero molestias! Dolore quas distinctio
            obcaecati corrupti accusamus officia nihil molestiae assumenda? Quos
            eum repellat, delectus porro sunt accusantium quae ea vel
            consequuntur, assumenda commodi, praesentium sed dolores error iste
            nobis quis quam temporibus voluptas exercitationem velit
            voluptatibus. Dignissimos asperiores itaque deleniti! Aliquid,
            ullam. Quo sunt doloribus molestias. Quod ullam similique quia ipsum
            error, perspiciatis, fuga odio soluta, rerum voluptatum nostrum
            fugit laudantium quos. Maxime suscipit dolore doloremque natus
            nihil.
          </p>
        </div>
      </div>
      <ArticlesList data={data} loading={loading} error={error} />
      <Footer />
    </>
  );
};

export default Author;
