import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const posts = [1, 2, 3];
  return (
    <footer className="">
      <section className="flex justify-center items-center border-b pb-16">
        <div className="w-[80%] md:w-[70%] text-center flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="md:text-[14.5px]">
          Subscribe to our email newsletter for a weekly look at the top stories in travel, design and photography.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-1 w-full md:w-[90%]">
            <input type="text" className="w-full border py-[10px] px-2 text-[14px] outline-none bg-[#f6f6f6] focus-within:bg-white transition duration-200 ease" placeholder="Your name" />
            <input type="text" className="w-full border py-[10px] px-2 text-[14px] outline-none bg-[#f6f6f6] focus-within:bg-white transition duration-200 ease" placeholder="Your email address" />
            <button className="md:w-[50%] w-full border-none text-[12px] bg-[#edb48b] text-white px-2 py-[10px] cursor-pointer outline-none">SIGN UP</button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-16">
        <div className="h-full flex flex-col md:flex-row w-[75%] gap-7">
          <div className="flex flex-col gap-6 md:max-w-[50%]">
            <h3 className="font-semibold">About Blog</h3>
            <div className="flex flex-col gap-6">
            <small className="text-[14px] md:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum
              quidem? Eligendi cumque quisquam natus ab omnis molestias alias Lorem ipsum dolor sit.
              ipsum accusamus.
            </small>
            <small className="text-[14px] md:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum
              quidem? Eligendi cumque quisquam natus ab omnis molestias alias Lorem ipsum dolor sit.
              ipsum accusamus.
            </small>
            <Link to="/author" className="text-[14px] md:text-[13px] italic text-[#6074b5] hover:text-[#767676]">More about me →</Link>
            </div>
          </div>
          <div className="h-full flex flex-col gap-6">
            <h3 className="font-semibold">Featured Posts</h3>
            <div className="flex flex-col gap-4">
            {posts.map((post, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-[4rem] h-[4rem]" >
                <img
                  className="w-full h-full object-cover object-center"
                  src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2017/08/gian-cescon-00ByEXKcSkA-unsplash-150x150.jpg"
                />
                </div>
                <div className="flex flex-col gap-2">
                  <small className="text-[14px] md:text-[13px] max-w-[90%]">
                    Lorem consectetur adipisicing elit Lorem, ipsum.
                  </small>
                  <small className="font-light text-[11px] md:text-[10px]">August 8, 2019</small>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
