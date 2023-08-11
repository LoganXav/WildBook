import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import ShareIcon from '@mui/icons-material/Share';

const FeaturedPost = () => {
  const data = {
    category: "Love",
    title: "Memories from a Long Summer Holiday",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis sapiente corporis ab similique dolorum voluptatem. Officia magni, ab quasi repellat facere rerum qui quia neque. Amet a ab doloribus expedita quibusdam ipsa autem, itaque aperiam? Quas excepturi unde qui laborum sint error magnam saepe nemo, asperiores molestias, quo deserunt molestiae dignissimos, distinctio sapiente. Amet corporis quae voluptates perspiciatis suscipit ipsa quisquam possimus animi cupiditate, molestiae eveniet perferendis incidunt totam quo aliquam aspernatur consequatur laborum doloremque nam adipisci repudiandae expedita sunt odit eos. Libero consequuntur, ab voluptatum qui consequatur reiciendis sit quam ipsam corporis, at eum maiores eveniet excepturi amet!",
  };
  return (
    <>
      <Navbar />
      <div className="w-full border-b mb-16">
        <div className="text-center py-16 w-[80%] md:w-[70%] mx-auto flex flex-col items-center gap-3">
          <h4 className="text-xs tracking-[3px] uppercase">{data.category}</h4>
          <div className="w-[5%] mx-auto">
            <hr />
          </div>
          <h2 className="text-4xl sm:text-3xl">{data.title}</h2>
          <div className="flex gap-2 items-center md:text-sm italic mb-2">
            <p className="text-sm sm:text-xs text-[#767676]">Posted on August 8, 2019</p>
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
            <p>{data.desc}</p>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-2 w-[90%] max-h-[30rem] mt-10">
            <div className="w-ful h-full row-span-2">
            <img
              src="http://0.gravatar.com/avatar/f44e7d18176511aed07496128445e855?s=150&d=mm&r=g"
              alt="Image 1"
              className="object-cover object-center h-full w-full"
              />
              </div>
              <div>
            <img
              src="http://0.gravatar.com/avatar/f44e7d18176511aed07496128445e855?s=150&d=mm&r=g"
              alt="Image 2"
              className="object-cover object-center w-full h-full"
              />
              </div>
            <div>

            <img
              src="http://0.gravatar.com/avatar/f44e7d18176511aed07496128445e855?s=150&d=mm&r=g"
              alt="Image 3"
              className="object-cover object-center w-full h-full"
              />
              </div>
            <div  className="col-span-2 row-span-1">

            <img
              src="http://0.gravatar.com/avatar/f44e7d18176511aed07496128445e855?s=150&d=mm&r=g"
              alt="Image 5"
              className="object-cover object-center w-full h-full"
              />
              </div>
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
      </div>
      <Footer />
    </>
  );
};

export default FeaturedPost;
