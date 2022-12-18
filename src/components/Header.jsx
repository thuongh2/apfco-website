import React from "react";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="h-8 bg-[#019147] py-1 px-9 text-white flex justify-between text-[14px]">
        <div className="">
          <p>Công Ty Cổ Phần Nông Sản Thực Phẩm Quảng Ngãi</p>
        </div>
        <div className="flex">
          <div className="mr-4">
            <p>VN</p>
          </div>
          <div className="">
            <p>Làm việc</p>
          </div>
        </div>
      </div>
      <div className="">
        <HeaderTop />
      </div>
    </div>
  );
};

export default Header;
