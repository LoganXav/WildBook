import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../../context/authContext";
import  logo  from "../../assets/logo.png"

const SidePanel = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const { currentUser, signin, signup, logout } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      setLoading(true)
      await signup({
        username,
        email,
        password,
      });
      setLoading(false)
      setUsername("");
      setEmail("");
      setPassword("");
      setErrorMessage("");
      setAuthOpen(false);
      navigate("/plans")
    } catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data);
    }
  };
  
  const handleLogin = async () => {
    try {
      setLoading(true)
      await signin({
        username2,
        password2,
      });
      setUsername2("");
      setLoading(false)
      setPassword2("");
      setErrorMessage2("");
      setAuthOpen(false);
      navigate("/plans")
    } catch (err) {
      setLoading(false)
      setErrorMessage2(err.response.data);
    }
  };

  const handleLogout = async () => {
    try{
      await logout()
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleCloseAuth = () => {
    setAuthOpen(false);
    setErrorMessage("");
    setErrorMessage2("");
  };

  return (
    <section
      className={`p-5 py-8 h-full w-full ${
        searchOpen || authOpen ? "bg-[#00000091]" : "bg-[#0000006d]"
      } relative`}
    >
      <div
        className={`flex w-full h-full min-h-[55vh] md:min-h-[55vh] ${
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
          {currentUser !== null ? (
            <span className="cursor-pointer" onClick={handleLogout}>
              <LogoutIcon />
            </span>
          ) : (
            <span className="cursor-pointer" onClick={() => setAuthOpen(true)}>
              <PermIdentityIcon />
            </span>
          )}
        </div>

        <div className="flex self-center flex-col justify-center text-center items-center gap-6">
          <Link to="/">
            <img
              className="w-[80%] mx-auto"
              src={logo}
            />
          </Link>
          <p className="sm:text-xs max-w-[90%] md:max-w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            facilis pariatur iure ullam, quisquam ipsa?
          </p>
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/ssegun__" className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <InstagramIcon style={{ fontSize: "15px" }} />
            </a>
            <a href="https://twitter.com/Ssegun_" className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <TwitterIcon style={{ fontSize: "15px" }} />
            </a>
            <a href="" className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <WhatsAppIcon style={{ fontSize: "15px" }} />
            </a>
            <a href="https://www.linkedin.com/in/logan10927" className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <LinkedInIcon style={{ fontSize: "15px" }} />
            </a>
            <a href="https://github.com/LoganXav" className="flex items-center justify-center border border-[#9a9a9a] hover:border-[#cacaca] transition duration-200 ease rounded-full p-3 cursor-pointer">
              <GitHubIcon style={{ fontSize: "15px" }} />
            </a>
          </div>
        </div>
        <p className="sm:text-xs self-center text-center">
          © 2020 — 2023 The Wild Book
        </p>
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
          onClick={handleCloseAuth}
          className="static md:absolute lg:static flex items-center justify-center self-end border border-[#cacaca] hover:border-[#e3e3e3] transition duration-200 ease rounded-full p-3 cursor-pointer w-[2rem] h-[2rem]"
        >
          <CloseIcon style={{ fontSize: "15px", color: "#cacaca" }} />
        </span>
        <div className="w-full lg:w-full md:w-[70%] mx-auto h-[90%] flex justify-center items-center mt-[-3rem] md:mt-[-4rem]">
          <div className="flex flex-col gap-3 w-[70%]">
            <h3 className="font-medium">Create an account</h3>
            <div className="flex flex-col gap-3">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
                className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                type="email"
                className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"
              />
              <div className="flex gap-3 w-full justify-between">
                <button
                  onClick={handleRegister}
                  className=" border border-[#909090] w-[5rem] px-2 py-1 text-[12px] hover:border-[#e3e3e3] transition duration-200 ease disabled:opacity-20 outline-none"
                  disabled={loading}
                >
                  REGISTER
                </button>
                <small className="text-[#909090] text-[12px]">
                  {errorMessage}
                </small>
              </div>
            </div>
            <h3 className="font-medium">Login</h3>
            <div className="flex flex-col gap-3">
              <input
                value={username2}
                onChange={(e) => setUsername2(e.target.value)}
                placeholder="Username"
                type="text"
                className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"
              />
              <input
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Password"
                type="password"
                className=" bg-transparent p-1 md:p-2 border border-[#909090] text-[#cacaca] text-[12px] md:text-[14px] outline-none focus-within:border-[#e3e3e3] transition duration-200 ease"
              />
              <div className="flex gap-3 w-full justify-between">
                <button
                  onClick={handleLogin}
                  className="border border-[#909090] w-[5rem] px-2 py-1 text-[12px] hover:border-[#e3e3e3] transition duration-200 ease disabled:opacity-20 outline-none"
                  disabled={loading}
                >
                  LOGIN
                </button>
                <small className="text-[#909090] text-[12px]">
                  {errorMessage2}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;
