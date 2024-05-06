import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-5 bg-[#5228f5] w-[100%] flex items-center h-[20vh] top-0 left-0">
      <div className="rounded-full mx-auto m-5 w-[95%] relative h-[11vh] flex px-2 sm:px-6 lg:px-8 bg-white">
        <h1 className="ml-3 text-center text-[1.5rem] sm:text-3xl md:text-[2rem] flex-shrink-0 items-center justify-center m-auto">
          <a
            href="/"
            className="text-indigo-900 hover:text-[#5228f5] font-semibold"
          >
            अनुवाद
          </a>
        </h1>
        <div className="flex-1 flex items-center justify-center m-auto sm:items-stretch ">
          <div className=" m-auto hidden sm:block">
            <a
              href="/"
              className="text-[#5229f5] hover:bg-indigo-200 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/DetailBox"
              className="text-[#5229f5] hover:bg-indigo-200 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Details
            </a>
            <a
              href="/Features"
              className="text-[#5229f5] hover:bg-indigo-200 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </a>
            <a
              href="/"
              className="text-[#5229f5] hover:bg-indigo-200 hover:text-indigo-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </div>
          <div className={`${isOpen ? "hidden" : ""}  flex`}>
            <a
              href="/FormCard"
              className="block px-3 mr-1 py-2 rounded-md text-base font-medium text-[#5229f5] hover:bg-indigo-700 hover:text-white"
            >
              Login
            </a>
          </div>
        </div>

        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className=" hover:bg-indigo-900 mr-5 sr inline-flex items-center justify-center p-2 rounded-3xl text-indigo-900 hover:text-white scale-90 transition-all focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className=" sr-only">Open main menu</span>
            <svg
              className={`block h-6 w-6 hover:scale-100 transition-all ${
                isOpen ? "hidden" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 hover:scale-100 transition-all ${
                isOpen ? "" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } z-50 opacity-[0.99] rounded sm:hidden`}
        id="mobile-menu"
      >
        <div className=" text-center flex flex-col items-center justify-center hover:scale-95 transition-all px-2 pt-2 pb-3 space-y-1 absolute w-[100%] left-0 top-[20vh] bg-[rgb(63,64,65)]">
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:scale-105 transition w-[90%] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/DetailBox"
            className="text-gray-300 hover:bg-gray-700 hover:scale-105 transition w-[90%] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Details
          </a>
          <a
            href="/Features"
            className="text-gray-300 hover:bg-gray-700 hover:scale-105 transition w-[90%] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Features
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:scale-105 transition w-[90%] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
