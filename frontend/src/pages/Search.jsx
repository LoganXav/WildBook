import React from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Search = () => {
  const searchResults = [1, 2, 3];
  return (
    <>
      <Navbar />
      <section className="border-b flex justify-center items-center py-16">
        <div className="w-[80%] md:w-[60%] flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl">Search Results for: "love"</h2>
        </div>
      </section>
      {searchResults.map((result) => (
        <section className="border-b py-16 mb-16">
          <div className="w-[70%] flex flex-col md:flex-row mx-auto gap-10 md:gap-6">
            <div className="flex flex-col gap-5">
              <h2 className="text-[2.1rem] hover:text-[#767676] transition duration-200 ease cursor-pointer">Finding Love and Romance on the Road</h2>
              <div className="text-[14px] flex gap-2 items-center">
                <small>Lifestyle</small>  <span className="flex items-center justify-center">
                <FiberManualRecordIcon
                  style={{ color: "#767676", fontSize: "5px" }}
                />
              </span><small> August 8, 2019</small>
              </div>
              <p className="md:text-[14.5px]">
                A romantic journey is the best way to fill your relationship
                with a loved one with new feelings and vivid emotions. This
                journey will leave…
              </p>
            </div>
            <div>
              <img src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2017/08/mohammed-hassan-oMLai_QCvKY-unsplash-500x755.jpg" />
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </>
  );
};

export default Search;
