import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-blue-900 font-semibold">با ما در تماس باشید !</h4>
              <h5 className="text-lg mt-0 mb-2 text-blue-600">
                ما را در شبکه های اجتماعی زیر دنبال کنید :
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                    لینک های مفید
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=nr-footer"
                      >
                        درباره ما
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=nr-footer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nr-footer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        محصولات رایگان
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                    سایر منابع
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=nr-footer"
                      >
                        شرایط و مفاد
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=nr-footer"
                      >
                        حریم شخصی
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nr-footer"
                      >
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
