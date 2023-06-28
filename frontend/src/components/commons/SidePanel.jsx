import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
// import axios from "axios"
import useFetch from "../../hooks/useFetch";
import { makeRequest } from "../../makeRequest";

const SidePanel = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const [username, setUsername] = useState("")
  const [username2, setUsername2] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [errorMessage2, setErrorMessage2] = useState("")
  
  
  const handleRegister = async () => {
    try {
        const res = await makeRequest.post("/auth/signup", {
        username: username,
        email: email,
        password: password
      })
      setErrorMessage(res.data.errors[0].msg)
      setUsername("")
      setEmail("")
      setPassword("")
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogin = async() => {
    try {
        const res = await makeRequest.get("/auth/signin", {
        username: username2,
        password: password2
      })
      setErrorMessage2(res.data.errors[0].msg)
      setUsername2("")
      setPassword2("")
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section
      className={`p-5 py-8 h-full w-full ${
        searchOpen || authOpen ? "bg-[#00000091]" : "bg-[#0000006d]"
      } relative`}
    >
      <div
        className={`flex w-full h-full min-h-[55vh] md:min-h-[40vh] ${
          searchOpen || authOpen ? "opacity-0 z-[-1]" : "opacity-1 z-[99]"
        } flex-col justify-between text-white transition duration-200 ease-in`}
      >
        <div className="flex w-full justify-between">
          <div
            className="cursor-pointer w-fit h-fit"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </div>
          <span className="cursor-pointer" onClick={() => setAuthOpen(true)}>
            <PermIdentityIcon />
          </span>
        </div>

        <div className="flex self-center flex-col justify-center text-center items-center gap-6">
          <Link to="/">
            <img
              className="w-[80%] mx-auto"
              src="http://nordthemes.com/wild-book-demo/wp-content/uploads/sites/14/2022/01/wildbooklogonew-21.png"
            />
          </Link>
          <p className="text-[14px] md:text-[13px] max-w-[90%] md:max-w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            facilis pariatur iure ullam, quisquam ipsa?
          </p>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <InstagramIcon style={{ fontSize: "15px" }} />
            </span>
            <span className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <TwitterIcon style={{ fontSize: "15px" }} />
            </span>
            <span className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <WhatsAppIcon style={{ fontSize: "15px" }} />
            </span>
            <span className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <LinkedInIcon style={{ fontSize: "15px" }} />
            </span>
            <span className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <GitHubIcon style={{ fontSize: "15px" }} />
            </span>
          </div>
        </div>
        <small className="self-center text-center text-[14px] md:text-[13px]">
          © 2020 — 2023 The Wild Book
        </small>
      </div>
      <div
        className={`absolute ${
          searchOpen ? "opacity-1 z-[99]" : "opacity-0 z-[-1]"
        } top-0 left-0 flex w-full h-full min-h-[60vh] flex-col justify-between text-white p-8 transition duration-200 ease-in`}
      >
        <span
          onClick={() => setSearchOpen(false)}
          className="flex items-center justify-center self-end border border-[#cacaca] hover:border-[#e3e3e3] transition duration-200 ease rounded-full p-3 cursor-pointer w-[2rem] h-[2rem]"
        >
          <CloseIcon style={{ fontSize: "16px", color: "#cacaca" }} />
        </span>
        <div className="w-full h-full flex justify-center items-center">
          <div className="border-b w-[90%] md:w-[50%] lg:w-[90%] p-2 border-[#909090] self-center justify-between flex">
            <input
              type="text"
              placeholder="Type Keywords..."
              className="border-0 text-[#cacaca] bg-transparent outline-none w-full"
            />
            <SearchIcon
              style={{ fontSize: "22px", cursor: "pointer", color: "#cacaca" }}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute ${
          authOpen ? "opacity-1 z-[99]" : "opacity-0 z-[-1]"
        } top-0 left-0 flex w-full h-full min-h-[60vh] flex-col justify-between text-white p-8 transition duration-200 ease-in`}
      >
        <span
          onClick={() => setAuthOpen(false)}
          className="static md:absolute lg:static flex items-center justify-center self-end border border-[#cacaca] hover:border-[#e3e3e3] transition duration-200 ease rounded-full p-3 cursor-pointer w-[2rem] h-[2rem]"
        >
          <CloseIcon style={{ fontSize: "15px", color: "#cacaca" }} />
        </span>
        <div className="w-full lg:w-full md:w-[70%] mx-auto h-[90%] flex justify-center items-center mt-[-3rem] md:mt-[-4rem]">
          <div className="flex flex-col gap-3 w-[70%]">
            <h3 className="font-medium">Create an account</h3>
            <div className="flex flex-col gap-3">
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="email" className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"/>
            <div className="flex gap-3 w-full justify-between">
            <button onClick={handleRegister} className="border border-[#909090] px-2 py-1 text-[12px] hover:border-[#e3e3e3] transition duration-200 ease">REGISTER</button>
            <small className="text-[#909090] text-[12px]">{errorMessage}</small>
            </div>
            </div> 
            <h3 className="font-medium">Login</h3>
            <div className="flex flex-col gap-3">
            <input value={username2} onChange={(e) => setUsername2(e.target.value)} placeholder="Username" type="text" className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"/>
            <input value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Password" type="password" className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"/>
            <div className="flex gap-3 w-full justify-between">
            <button onClick={handleLogin} className="border border-[#909090] px-2 py-1 text-[12px] hover:border-[#e3e3e3] transition duration-200 ease">LOGIN</button>
            <small className="text-[#909090] text-[12px]">{errorMessage2}</small>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;
