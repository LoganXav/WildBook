import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import { Comment } from "../Comment";
import { Suggestion } from "../Suggestion";

export const RomanceArticle = ({ data }) => {
  return (
    <div className="w-full">
      <div className="text-center w-[80%] md:w-[70%] mx-auto flex flex-col items-center gap-3">
        <h4 className="text-xs tracking-[3px] uppercase">{data.category}</h4>
        <div className="w-[5%] mx-auto">
          <hr />
        </div>
        <h2 className="text-3xl">{data.title}</h2>
        <div className="flex gap-2 items-center italic mb-2 md:text-sm">
          <p className="text-sm sm:text-xs text-[#767676]">
            Posted on {data.date}
          </p>
          <span className="flex items-center justify-center">
            <FiberManualRecordIcon
              style={{ color: "#767676", fontSize: "5px" }}
            />
          </span>
          <Link to="/author" className="text-[#6074b5] hover:text-[#767676]">
            by Logan Xavier
          </Link>
        </div>
        <div className="sm:text-sm text-left flex flex-col gap-7">
          <p>{data.mainContent[0].split(". ").slice(0, 3).join(". ") + "."}</p>
          <img src={data.articleImageUrl[0]} />
          <p>{data.mainContent[0].split(". ").slice().join(". ")}</p>
        </div>
        <div className="sm:text-sm text-left flex flex-col gap-7 mt-8">
          <h3 className="font-semibold text-xl">{data.subtitle[0]}</h3>
          <p>{data.mainContent[1].split(". ").slice(0, 5).join(". ") + "."}</p>
          <img src={data.articleImageUrl[1]} />
          <p>{data.mainContent[1].split(". ").slice(5, 12).join(". ")}</p>
          <p>{data.mainContent[1].split(". ").slice().join(". ")}</p>
        </div>
        <div className="sm:text-sm text-left flex flex-col gap-7 mt-8">
          <h3 className="font-semibold text-xl">{data.subtitle[1]}</h3>
          <p>{data.mainContent[1].split(". ").slice(0, 4).join(". ") + "."}</p>
          {/* <blockquote className="blockquote2 italic">
            <p>{data.quote}</p>
            <cite>- {data.quotedPerson}</cite>
          </blockquote> */}
          <blockquote className="blockquote italic">{data.quote}</blockquote>

          <p>{data.mainContent[1].split(". ").slice(4, 12).join(". ")}</p>
          <img src={data.articleImageUrl[1]} />
          <p>{data.mainContent[1].split(". ").slice().join(". ")}</p>
        </div>
        <div className="sm:text-sm text-left flex flex-col gap-7 mt-8">
          <h3 className="font-semibold text-xl">{data.subtitle[2]}</h3>
          <p>{data.mainContent[2].split(". ").slice(0, 5).join(". ") + "."}</p>
          <img src={data.articleImageUrl[2]} />
          <p>{data.mainContent[2].split(". ").slice().join(". ")}</p>
        </div>
        <div className="flex text-[#333333] self-start mt-8 gap-2 items-center">
          <span className="flex items-center justify-center p-1">
            <ShareIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="flex items-center justify-center bg-[#ececec] hover:text-[#fff] hover:bg-[#d83860] transition duration-200 ease rounded-full p-3 cursor-pointer ">
            <InstagramIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="flex text-[#333333] items-center justify-center bg-[#ececec] hover:text-[#fff] hover:bg-[#5a94ff] transition duration-200 ease rounded-full p-3 cursor-pointer ">
            <TwitterIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="flex text-[#333333] items-center justify-center bg-[#ececec] hover:text-[#fff] hover:bg-[#2ed026] transition duration-200 ease rounded-full p-3 cursor-pointer ">
            <WhatsAppIcon style={{ fontSize: "15px" }} />
          </span>
        </div>
      </div>
      <Suggestion category={data.category} title={data.title} />
      <div className="w-full border-t mt-16 pt-16">
        <div className="w-[80%] md:w-[70%] mx-auto">
          <Comment title={data.title} />
        </div>
      </div>
    </div>
  );
};
