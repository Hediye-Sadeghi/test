import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="w-90 h-20 flex justify-between rounded-xl rounded-t-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white drop-shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="w-full  h-full flex justify-end items-center">
          <nav className="w-full">
            <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
              <div aria-label="Home. logo" role="img">
                <img
                  className="w-12 md:w-auto"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg"
                  alt="logo"
                />
              </div>

              <div>
                <button
                  onClick={() => setShow(!show)}
                  className={`${
                    show ? "hidden" : ""
                  } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
                >
                  <svg
                    aria-haspopup="true"
                    aria-label="open Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:hidden icon icon-tabler icon-tabler-menu"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                </button>
                <div
                  id="menu"
                  className={` ${show ? "" : "hidden"} md:block lg:block `}
                >
                  <button
                    onClick={() => setShow(!show)}
                    className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
                  >
                    <svg
                      aria-label="close main menu"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </button>
                  <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                    <li className="cursor-pointer">
                      <Link className="text-blue-900 hover:text-blue-500 text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" to="/">
                        خونه
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link className="text-blue-900 hover:text-blue-500 text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" to="javascript: void(0)">
                        دوره های آموزشی
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link className="text-blue-900 hover:text-blue-500 text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" to="/articles/:page">
                        اخبار و مقالات
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link className="text-blue-900 hover:text-blue-500 text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" to="javascript: void(0)">
                        مهارتهای نرم
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link className="text-blue-900 hover:text-blue-500 text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" to="/about">
                        درباره ما
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/login">
                <button className="lg:font-bold lg:text-xl shadow-md bg-orange-500 hidden md:block transition duration-150 ease-in-out border border-orange-400 hover:bg-orange-200 rounded-lg hover:border-orange-400 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 sm:text-sm">
                  ورود / عضویت
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}