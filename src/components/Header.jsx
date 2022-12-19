import React from "react";
import HeaderTop from "./HeaderTop";
import { NavLink } from "react-router-dom";
import useScrollDirection from "../functions/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div className="z-50 hidden lg:block">
        <div
          className={`sticky ${
            scrollDirection === "down" ? "-top-8" : "top-0"
          } h-8 bg-[#019147] py-1 px-9 text-white flex justify-between text-[14px] transition-all duration-500 ease-in-out`}
        >
          <div className="">
            <p>Công Ty Cổ Phần Nông Sản Thực Phẩm Quảng Ngãi</p>
          </div>
          <div className="flex">
            <div className="mr-4 flex items-center gap-2">
              <img className="w-3 h-3" src="./image/logo/VN.png" alt />
              <p>VN</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66683 12.8333H8.50016V11.6666C8.50016 11.2025 8.31579 10.7573 7.9876 10.4291C7.65941 10.101 7.21429 9.91658 6.75016 9.91658H3.25016C2.78603 9.91658 2.34091 10.101 2.01273 10.4291C1.68454 10.7573 1.50016 11.2025 1.50016 11.6666V12.8333H0.333496V11.6666C0.333496 10.893 0.640787 10.1512 1.18777 9.60419C1.73475 9.05721 2.47661 8.74992 3.25016 8.74992H6.75016C7.52371 8.74992 8.26558 9.05721 8.81256 9.60419C9.35954 10.1512 9.66683 10.893 9.66683 11.6666V12.8333ZM5.00016 7.58325C4.54054 7.58325 4.08541 7.49272 3.66077 7.31683C3.23613 7.14094 2.85029 6.88313 2.52529 6.55813C2.20028 6.23312 1.94248 5.84728 1.76658 5.42264C1.59069 4.998 1.50016 4.54288 1.50016 4.08325C1.50016 3.62363 1.59069 3.1685 1.76658 2.74386C1.94248 2.31922 2.20028 1.93338 2.52529 1.60838C2.85029 1.28337 3.23613 1.02556 3.66077 0.849674C4.08541 0.673782 4.54054 0.583252 5.00016 0.583252C5.92842 0.583252 6.81866 0.952001 7.47504 1.60838C8.13141 2.26476 8.50016 3.15499 8.50016 4.08325C8.50016 5.01151 8.13141 5.90175 7.47504 6.55813C6.81866 7.2145 5.92842 7.58325 5.00016 7.58325ZM5.00016 6.41658C5.619 6.41658 6.21249 6.17075 6.65008 5.73317C7.08766 5.29558 7.3335 4.70209 7.3335 4.08325C7.3335 3.46441 7.08766 2.87092 6.65008 2.43334C6.21249 1.99575 5.619 1.74992 5.00016 1.74992C4.38132 1.74992 3.78783 1.99575 3.35025 2.43334C2.91266 2.87092 2.66683 3.46441 2.66683 4.08325C2.66683 4.70209 2.91266 5.29558 3.35025 5.73317C3.78783 6.17075 4.38132 6.41658 5.00016 6.41658Z"
                  fill="white"
                />
              </svg>
              <NavLink to="/login">Làm việc</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[2000] sticky top-0 bg-white  transition-all duration-500 ease-in-out">
        <HeaderTop />
      </div>
    </>
  );
};

export default Header;
