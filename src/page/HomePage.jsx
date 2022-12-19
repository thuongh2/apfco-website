import React from "react";
import Blog from "../components/Blog";
import CarouselCustom from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";

const HomePage = () => {
  return (
    <>
      <Header />
      <CarouselCustom />
      <div>
        {/* APFO */}
        <div className="mb-20 h-[680px]">
          <div className="">
            <div className="lg:mt-32 absolute grid grid-cols-8 gap-6 w-full">
              <div className="col-start-2 col-span-3 xl:col-start-3 xl:col-span-2">
                <img className=" w-full object-cover" src="./image/about-us.png" alt="" />
              </div>
              <div className="col-start-5 col-span-3 text-justify">
                <div>
                  <h1 className="text-4xl text-[#019147] font-semibold my-3">
                    Về APFCO
                  </h1>
                  <hr className="w-10 h-2 rounded-lg bg-[#EA2127] my-4" />
                  <span className="text-[18px] text-[#667085] leading-[30px] text-justify">
                    Kể từ tháng 12/2003, thương hiệu APFCO đã và đang được nhiều
                    đơn vị khách hàng trên thị trường trong và ngoài nước đón
                    nhận bởi chất lượng sản phẩm (nguồn nguyên liệu tươi, sản
                    phẩm bột đạt tiêu chuẩn khắt khe, bảo quản trong môi trường
                    chuyên nghiệp), áp dụng kĩ thuật - công nghệ tiên tiến (ISO
                    9001:2015), khẳng định uy tín lâu dài.
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <img className="h-full" src="./image/aboutus-bg.png" alt="" />
        </div>
        <ProductItem />
        {/* mạng lưới */}
        <div className="bg-hero mt-20 py-14">
          <div className="grid z-20 absolute grid-cols-8 gap-6 w-full ">
            <div className="col-start-3 col-span-2">
              <img className=" w-full" src="./image/network-map.png" alt="" />
            </div>
            <div className="col-start-5 col-span-3 text-justify flex items-center">
              <div>
                <h1 className="text-4xl text-[#FFFFFF] font-semibold my-3">
                  Mạng lưới APFCO
                </h1>
                <hr className="w-10 h-2 rounded-lg bg-[#EA2127] my-4" />
                <span className="text-[18px] text-[#FFFFFF] leading-[30px]">
                  APFCO sở hữu hệ thống các nhà máy hiện đại từ Duyên hải Nam
                  Trung Bộ,Tây Nguyên đến Đông Nam Bộ, bao gồm: có 12 đơn vị
                  trực thuộc, 6 công ty con và 1 công ty liên kết. Vị trí nhà
                  máy được phân bổ gần kề các vùng nguyên liệu, giúp tối ưu
                  trong khâu vận chuyển & đảm bảo chất lượng của nguyên liệu.
                </span>
                <br />
              </div>
            </div>
          </div>
          <img
            className="opacity-40 mt-5"
            src="./image/Untitled-1.png"
            alt=""
          />
        </div>
      </div>
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;
