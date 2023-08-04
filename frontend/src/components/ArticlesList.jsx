import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useFetchArticleCovers } from "../hooks/useFetch";
import LockIcon from '@mui/icons-material/Lock';
import { AuthContext } from "../context/authContext";
import Skeleton from "./Skeleton"

export const ArticlesList = () => {
  const { data, loading, error } = useFetchArticleCovers(
    import.meta.env.VITE_APP_API_URL + "/articles/covers"
  );
 
  const { userPlan, sub } = useContext(AuthContext);

  useEffect(() => {
    const fetchPlan = async () => {
      await userPlan()
    }
    fetchPlan()
  }, [])

   return (
    <>
    {
      loading ? (<Skeleton type="articleList" /> ) : error ? <div className="border-b pb-16 mb-16 w-[80%] md:w-[75%] mx-auto">Couldn't reach server!</div> : (
       data.map((article) => (
        <div className="" key={article._id}>
          <div className="text-center w-[80%] md:w-[70%] mx-auto flex flex-col items-center gap-3">
            <h4 className="text-xs tracking-[3px] uppercase">
              {article.category}
            </h4>
            <div className="w-[5%] mx-auto">
              <hr />
            </div>
            <Link to={`/article/${article._id}`}>
              <h2 className="text-3xl hover:text-[#767676] transition duration-200 ease">
                {article.title}
              </h2>
            </Link>
            <div className="flex italic items-center gap-3 mb-2 lg:text-xs">
              <p className="text-[#767676]">Posted on {article.date}</p>
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
            <div className="lg:text-sm flex flex-col gap-8 text-left">
              <p>
                {article.coverContent.split(". ").slice(0, 3).join(". ") + "."}
              </p>
              <img
                className="w-full aspect-[1/0.6] object-center object-cover "
                src={article.coverImageUrl}
              />
              <p>{article.coverContent.split(". ").slice(3).join(". ")}</p>
            </div>
            <Link
              to={`/article/${article._id}`}
              className="text-sm self-start italic cursor-pointer text-[#6074b5] hover:text-[#333333] my-1"
            >
              Continue reading →
            </Link>
            <div className="flex text-[#333333] self-start gap-2 items-center">
              <span className="flex items-center justify-center bg-[#ececec] hover:text-[#fff] hover:bg-[#d83860] transition duration-200 ease rounded-full p-3 cursor-pointer ">
                <InstagramIcon style={{ fontSize: "15px" }} />
              </span>
              <span className="flex text-[#333333] items-center justify-center bg-[#ececec] hover:text-[#fff] hover:bg-[#5a94ff] transition duration-200 ease rounded-full p-3 cursor-pointer ">
                <TwitterIcon style={{ fontSize: "15px" }} />
              </span>
              <span className="flex text-[#333333] items-center justify-center bg-[#ececec] hover:text-[#fff] hover:bg-[#2ed026] transition duration-200 ease rounded-full p-3 cursor-pointer ">
                <WhatsAppIcon style={{ fontSize: "15px" }} />
              </span>
              <div className="p-3 text-[#333333] hover:text-[#edb48b] transition duration-200 ease">
                <span className="h-full flex justify-center items-center text-sm italic">
                 {article.access === "Free" ? "" : (article.access === "Basic" && sub === "Premium" || sub === "Basic") ? "" : (article.access === "Premium" && sub === "Premium") ? "" : <LockIcon style={{ fontSize: "14px" }} />  }{(article.access === "Free" || sub === "Premium") ? "" : article.access } 
                </span>
              </div>
            </div>
          </div>
          <hr className="my-14" />
        </div>)
      ))} 
    </>
  );
};
