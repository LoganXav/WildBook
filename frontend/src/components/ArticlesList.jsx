import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

export const ArticlesList = ({ articles }) => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nibh non dui aliquam, ut tempor sapien lacinia. Proin consequat ultrices diam, et sagittis nibh aliquet vitae. Ut tincidunt auctor mauris. Suspendisse potenti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, suscipit. Nullam scelerisque nisi non pharetra lacinia.";
  return (
    <>
      {articles.map((article, i) => (
        <div className="" key={i}>
          <div className="text-center w-[80%] md:w-[70%] mx-auto flex flex-col items-center gap-3">
            <h4 className="text-xs tracking-[3px]">INSPIRATION</h4>
            <div className="w-[5%] mx-auto">
              <hr />
            </div>
            <Link to={`/article/${1}`}>
            <h2 className="text-[2.1rem] hover:text-[#767676] transition duration-200 ease">Memories From The Last Summer</h2>
            </Link>
            <div className="flex text-[14px] italic items-center gap-3 mb-2">
              <p className="text-[#767676]">Posted on August 8, 2019</p>
              <span className="flex items-center justify-center">
                <FiberManualRecordIcon
                  style={{ color: "#767676", fontSize: "5px" }}
                />
              </span>
              <Link
                to="/author"
                className="text-[#6074b5] hover:text-[#767676] "
              >
                {" "}
                by Logan Xavier
              </Link>
            </div>
            <div className=" flex flex-col gap-8 text-left md:text-[14.5px]">
              <p>{text.split(". ").slice(0, 3).join(". ") + "."}</p>
              <img src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2019/08/neonbrand-tokYjYqaPB0-unsplash-1-768x512.jpg" />
              <p>{text.split(". ").slice(3).join(". ")}</p>
            </div>
            <Link to={`/article/${1}`} className="self-start italic cursor-pointer text-[#6074b5] hover:text-[#333333]">
              Continue reading →
            </Link>
            <div className="flex self-start gap-2">
              <span className="flex items-center justify-center bg-[#ececec] text-[#333333] hover:text-[#fff] hover:bg-[#d83860] transition duration-200 ease rounded-full p-3 cursor-pointer ">
                <InstagramIcon style={{ fontSize: "15px" }} />
              </span>
              <span className="flex items-center justify-center bg-[#ececec] text-[#333333] hover:text-[#fff] hover:bg-[#5a94ff] transition duration-200 ease rounded-full p-3 cursor-pointer ">
                <TwitterIcon style={{ fontSize: "15px" }} />
              </span>
              <span className="flex items-center justify-center bg-[#ececec] text-[#333333] hover:text-[#fff] hover:bg-[#2ed026] transition duration-200 ease rounded-full p-3 cursor-pointer ">
                <WhatsAppIcon style={{ fontSize: "15px" }} />
              </span>
            </div>
          </div>
          <hr className="my-14" />
        </div>
      ))}
    </>
  );
};
