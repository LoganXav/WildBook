import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const PsychologyArticle = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus error dignissimos quas qui veniam. Sit officia consequuntur similique blanditiis. pariatur dolorem asperiores corporis aliquid optio delectus. Tempora at perspiciatis dicta quisquam omnis doloremque autem in eius? Ipsam, pariatur facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minus error dignissimos quas qui veniam. Sit officia consequuntur similique blanditiis. pariatur dolorem asperiores corporis aliquid optio delectus. Tempora at perspiciatis dicta quisquam omnis doloremque autem in eius? Ipsam, pariatur facere? ";
  return (
    <div className="">
      <div className="text-center w-full mx-auto flex flex-col items-center gap-3">
        <h4 className="text-xs tracking-[3px]">INSPIRATION</h4>
        <div className="w-[5%] mx-auto">
          <hr />
        </div>
        <h2 className="text-4xl md:text-[2.1rem]">Memories From The Last Summer</h2>
        <div className="flex gap-2 items-center text-[14px] italic mb-2">
          <p className="text-[#767676]">Posted on August 8, 2019</p>
          <span className="flex items-center justify-center">
            <FiberManualRecordIcon
              style={{ color: "#767676", fontSize: "5px" }}
            />
          </span>
          <Link to="/author" className="text-[#6074b5] hover:text-[#767676]">
            by John Wood
          </Link>
        </div>
        <div className="text-left flex flex-col gap-7  md:text-[14.5px]">
          <p>{text.split(". ").slice(0, 5).join(". ") + "."}</p>
          <img src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2019/08/neonbrand-tokYjYqaPB0-unsplash-1-768x512.jpg" />
          <p>{text.split(". ").slice(3).join(". ")}</p>
        </div>
        <div className="text-left flex flex-col gap-7 mt-8 md:text-[14.5px]">
          <h3 className="font-semibold text-xl">Beautiful Love</h3>
          <p>{text.split(". ").slice(0, 5).join(". ") + "."}</p>
          <img src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2019/08/neonbrand-tokYjYqaPB0-unsplash-1-768x512.jpg" />
          <p>{text.split(". ").slice(5, 12).join(". ")}</p>
          <p>{text.split(". ").slice().join(". ")}</p>
          <blockquote className="blockquote italic">
            This is a block quote. It represents a section that is quoted from
            another source. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </blockquote>
          <blockquote className="blockquote2 italic">
            <p>
              There is never a time or place for true love. It happens
              accidentally, in a heartbeat, in a single flashing, throbbing
              moment.
            </p>
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
