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
    breakpoint: { max: 3000, min: 1080 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1080, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductItem = () => {
  return (
    <>
      <div className="grid grid-cols-7 mb-9">
        <div className="col-start-3 col-span-3 ">
          <h1 className="text-center text-4xl text-[#019147] font-semibold my-3">
            Sản Phẩm
          </h1>
          <div className="flex justify-center">
            <hr className=" w-10 h-1 rounded-lg bg-[#EA2127] my-2" />
          </div>

          <p className="font-normal text-center text-[#667085]">
            Với dây chuyền công nghệ hiện đại cùng với tay nghề nhân công ổn
            định, tinh bột sắn của công ty tự tin đáp ứng những yêu cầu về chất
            lượng cao và đảm bảo vệ sinh an toàn thực phẩm, không ảnh hưởng đến
            sức khỏe người tiêu dùng.
          </p>
        </div>
      </div>
      <div className="lg:ml-6">
        <Carousel
          swipeable={true}
          infinite={true}
          draggable={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div>
            <div className="flex justify-center flex-col">
              <img
                className="w-[224px] h-[281px]"
                src="/image/baobi1.png"
                alt=""
              />
              <p className="text-center font-medium">Tinh bột sắn APFCO</p>
            </div>
          </div>

          <div>
            <div className="flex justify-center flex-col">
              <img
                className="w-[224px] h-[281px]"
                src="/image/baobi3.png"
                alt=""
              />
              <p className="text-center font-medium">Tinh bột sắn APFCO</p>
            </div>
          </div>

          <div>
            <div className="flex justify-center flex-col">
              <img
                className="w-[224px] h-[281px]"
                src="/image/baobi3.png"
                alt=""
              />
              <p className="text-center font-medium">Tinh bột sắn APFCO</p>
            </div>
          </div>

          <div>
            <div className="flex justify-center flex-col">
              <img
                className="w-[224px] h-[281px]"
                src="/image/baobi4.png"
                alt=""
              />
              <p className="text-center font-medium">Tinh bột sắn APFCO</p>
            </div>
          </div>

          <div>
            <div className="flex justify-center flex-col">
              <img
                className="w-[224px] h-[281px]"
                src="/image/baobi1.png"
                alt=""
              />
              <p className="text-center font-medium">Tinh bột sắn APFCO</p>
            </div>
          </div>

          <div>
            <div className="flex justify-center flex-col">
              <img
                className="w-[224px] h-[281px]"
                src="/image/baobi3.png"
                alt=""
              />
              <p className="text-center font-medium">Tinh bột sắn APFCO</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ProductItem;
