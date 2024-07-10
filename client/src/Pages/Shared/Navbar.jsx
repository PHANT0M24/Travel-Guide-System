import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/feedback">Feedback</NavLink>
      </li>
    </>
  );
  const [changeHeader, setChangeHeader] = useState(false);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("forest");
    } else {
      setTheme("cupcake");
    }
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling
  window.addEventListener("scroll", onChangeHeader);
  return (
    <>
      <div
        className={`navbar ${
          changeHeader
            ? "bg-[#0000008C] fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
            : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-lg"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex flex-col ml-12 mx-auto">
            <NavLink
              to="/"
              className="btn bg-transparent border-none hover:bg-transparent"
            >
              <img
                className="w-[70px] h-[60px] mx-auto hidden md:flex"
                src="https://i.ibb.co/ZhP22nP/output-onlinepngtools.png"
                alt=""
              />
            </NavLink>
            <p className="text-center font-bold w-[90px] md:w-[150px] text-[15px] mr-3 md:mr-0 md:text-xl text-white">
              Explore Ease
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
        </div>
        <div className="navbar-end mr-12 mx-auto gap-x-7">
          <div className="text-lg md:text-2xl flex gap-x-4 cursor-pointer items-center">
            <IoSearch></IoSearch>
            {/* <FaCartFlatbed></FaCartFlatbed> */}
            <div>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme == "cupcake" ? false : true}
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-7 w-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-7 w-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <p className="text-3xl font-bold">|</p>
          </div>
          <button className="btn w-20 md:w-32 btn-outline">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
