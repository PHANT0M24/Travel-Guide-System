import { FaCartFlatbed } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navOptions = < >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/feedback">Feedback</NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col ml-12 mx-auto">
                        <img className="w-[90px] h-[80px] mx-auto hidden md:flex" src="https://i.ibb.co/ZhP22nP/output-onlinepngtools.png" alt="" />
                        <p className="text-center font-bold md:mt-[-10px] w-[90px] md:w-[150px] text-[15px] mr-3 md:mr-0 md:text-xl ">Explore Ease</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end mr-12 mx-auto gap-x-7">
                    <div className="text-lg md:text-2xl flex gap-x-4 cursor-pointer items-center">
                        <IoSearch></IoSearch>
                        <FaCartFlatbed></FaCartFlatbed>
                        <p className="text-3xl font-bold">|</p>
                    </div>
                    <button className="btn w-20 md:w-32 btn-outline">Book Now</button>
                </div>
            </div >
        </>
    );
};

export default Navbar;