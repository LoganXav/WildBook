import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const posts = [1, 2, 3];
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUpClick = () => {
    setUsername('');
    setEmail('');
  };
  return (
    <footer className="">
      <section className="flex justify-center items-center border-b pb-16">
        <div className="w-[80%] md:w-[70%] text-center flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="text-sm">
          Subscribe to our email newsletter for a weekly look at the top stories in travel, design and photography.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-1 w-full md:w-[90%]">
            <input onChange={handleUsernameChange} type="text" value={username} className="w-full text-[14px] border py-[10px] px-2 outline-none bg-[#f6f6f6] focus-within:bg-white transition duration-200 ease" placeholder="Your name" />
            <input onChange={handleEmailChange} type="text" value={email} className="w-full text-[14px] border py-[10px] px-2 outline-none bg-[#f6f6f6] focus-within:bg-white transition duration-200 ease" placeholder="Your email address" />
            <button onClick={handleSignUpClick} className="md:w-[50%] w-full text-[14px] border-none bg-[#edb48b] text-white px-2 py-[10px] cursor-pointer outline-none">SIGN UP</button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-16">
        <div className="h-full flex flex-col md:flex-row w-[75%] gap-7">
          <div className="flex flex-col gap-6 md:max-w-[50%]">
            <h3 className="font-semibold text-xl">About Blog</h3>
            <div className="flex flex-col gap-6 sm:text-xs text-sm ">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum
                quidem? Eligendi cumque quisquam natus ab omnis molestias alias Lorem ipsum dolor sit.
                ipsum accusamus.
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum
                quidem? Eligendi cumque quisquam natus ab omnis molestias alias Lorem ipsum dolor sit.
                ipsum accusamus.
              </p>
              <Link to="/author" className="italic text-[#6074b5] hover:text-[#767676]">More about me →</Link>
            </div>
          </div>
          <div className="h-full flex flex-col gap-6">
            <h3 className="font-semibold text-xl">Featured Posts</h3>
            <div className="flex flex-col gap-4">
            {posts.map((post, i) => (
              <div key={i} className="flex gap-3 h-full items-center">
                <div className="w-[4rem] h-full">
                <img
                  className="w-full h-full object-cover object-center"
                  src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2017/08/gian-cescon-00ByEXKcSkA-unsplash-150x150.jpg"
                />
                </div>
                <div className="flex flex-col gap-2 cursor-pointer hover:text-[#767676] transition duration-200 ease">
                  <Link to="/post/1" className="sm:text-xs text-sm max-w-[90%]">
                    Lorem consectetur adipisicing elit Lorem, ipsum.
                  </Link>
                  <small className="font-extralight text-[11px]">August 8, 2019</small>
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
