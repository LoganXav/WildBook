import React from "react";
import { Link } from "react-router-dom";

export const PsychologyArticle = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus error dignissimos quas qui veniam. Sit officia consequuntur similique blanditiis. pariatur dolorem asperiores corporis aliquid optio delectus. Tempora at perspiciatis dicta quisquam omnis doloremque autem in eius? Ipsam, pariatur facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus error dignissimos quas qui veniam. Sit officia consequuntur similique blanditiis. pariatur dolorem asperiores corporis aliquid optio delectus. Tempora at perspiciatis dicta quisquam omnis doloremque autem in eius? Ipsam, pariatur facere? ";
  return (
    <div className="">
      <div className="text-center w-full mx-auto flex flex-col items-center gap-6">
        <h4>INSPIRATION</h4>
        <div className="w-[6%] mx-auto">
          <hr />
        </div>
        <h2 className="text-3xl">Memories From The Last Summer</h2>
        <div className="flex gap-4">
          <p>Posted on August 8, 2019</p>.<Link to="/author">by John Wood</Link>
        </div>
        <div className="text-left flex flex-col gap-7">
          {text.split(". ").slice(0, 5).join(". ") + "."}
          <img src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2019/08/neonbrand-tokYjYqaPB0-unsplash-1-768x512.jpg" />
          {text.split(". ").slice(3).join(". ")}
        </div>
        <div className="text-left flex flex-col gap-7 mt-8">
          <h3 className="">Beautiful Love</h3>
          <p>{text.split(". ").slice(0, 5).join(". ") + "."}</p>
          <img src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2019/08/neonbrand-tokYjYqaPB0-unsplash-1-768x512.jpg" />
          <p>{text.split(". ").slice(5, 12).join(". ")}</p>
          <p>{text.split(". ").slice().join(". ")}</p>
        <blockquote className="blockquote">
        This is a block quote. It represents a section that is quoted from another source. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </blockquote>
        <blockquote className="blockquote2">
          <p>There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.</p>
          <cite>- SARAH DESSEN</cite>
      </blockquote>

        </div>

        <div className="flex self-start">
          <span>F</span>
          <span>F</span>
          <span>F</span>
          <span>F</span>
        </div>
      </div>
    </div>
  );
};
