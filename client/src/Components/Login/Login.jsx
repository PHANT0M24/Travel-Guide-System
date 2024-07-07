import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-[70vh] flex container mx-auto my-20">
      <style>
        {`
          .login_img_section {
            background: linear-gradient(rgba(2,2,2,.8),rgba(0,0,0,.7)),url(https://i.ibb.co/HBQ1zn7/Cozy-Townhouse-with-Garden.jpg) center center;
            background-size: cover;
          }
        `}
      </style>
      <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center lg:rounded-s-3xl">
        <div className="relative w-full mx-auto px-20 flex-col items-center space-y-6 z-10">
          <h1 className="text-white text-center font-bold text-5xl">
            Discover Hidden Gems!
          </h1>
          <p className="text-white text-2xl text-justify font-serif">
            Open your eyes to diverse cultures, stunning landscapes, and
            unforgettable experiences, creating lifelong memories and enriching
            your soul
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-gray-100 space-y-8 lg:rounded-e-3xl">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form className="bg-white rounded-md shadow-2xl p-8">
            <h1 className="text-gray-800 font-bold text-3xl mb-4">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              Welcome Back. Ready to log in?
            </p>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                className="pl-2 w-full outline-none border-none bg-gray-50"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="relative w-full">
                <input
                  className="pl-2 w-full outline-none border-none bg-gray-50"
                  type={show? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <div className="absolute top-0 right-4">
                        <label className="swap swap-flip text-9xl">
                          <input
                            type="checkbox"
                            onClick={() => {
                              setShow(!show);
                            }}
                          />
                          {show ? (
                            <div className="swap-on w-[15px] h-[15px]">
                              <img src="../../../public/visibilityOFF.svg" />
                            </div>
                          ) : (
                            <div className="swap-off w-[15px] h-[15px]">
                              <img src="../../../public/visibilityON.svg" />
                            </div>
                          )}
                        </label>
                      </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 py-3 rounded-2xl text-white font-semibold hover:bg-indigo-700 hover:-translate-y-1 transition transform duration-300"
            >
              Login
            </button>
            <div className="flex justify-between mt-4">
              <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-500 transition transform duration-300 hover:-translate-y-1">
                Forgot Password?
              </span>
              <a
                href="/register"
                className="text-sm text-gray-600 cursor-pointer hover:text-blue-500 transition transform duration-300 hover:-translate-y-1"
              >
                Do not have an account yet?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
