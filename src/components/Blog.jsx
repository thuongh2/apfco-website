import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-7 my-10">
        <div className="col-start-3 col-span-3 ">
          <h1 className="text-center text-4xl text-[#019147] font-semibold my-3">
            Tin tức
          </h1>
          <div className="flex justify-center">
            <hr className=" w-10 h-1 rounded-lg bg-[#EA2127] my-2" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-2">
          <a href="#">
            <div className="flex justify-center flex-col rounded-lg">
              <img
                className="w-[300px] h-[250px] mb-4 rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
                src="/image/Untitled-2.png"
                alt=""
              />
              <p className="font-medium">
                APFCO khánh thành công ty con thứ 2 tại Lào
              </p>
            </div>
          </a>
        </div>

        <div>
          <div className="flex justify-center flex-col">
            <img
              className="w-[300px] h-[250px] rounded-lg mb-4 hover:shadow-xl transition duration-300 ease-in-out  "
              src="/image/Untitled-3.png"
              alt=""
            />
            <p className="font-medium">
              APFCO khánh thành công ty con thứ 2 tại Lào
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center flex-col">
            <img
              className="w-[300px] h-[250px] rounded-lg mb-4 hover:shadow-xl transition duration-300 ease-in-out"
              src="/image/Untitled-4.png"
              alt=""
            />
            <p className="font-medium">
              APFCO khánh thành công ty con thứ 2 tại Lào
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
