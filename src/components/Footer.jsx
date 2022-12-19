import React from "react";
import logo from "../image/Logo.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-rose-600  text-[#667085]">
      <div className="text-[14px] leading-6 ">
        <div className="lg:grid lg:grid-cols-8 p-4 mt-6">
          <div className=" lg:col-start-2 lg:col-span-1 mx-auto">
            <img className="mx-auto my-6 lg:w-[80%]" src={logo} alt="okok" />
          </div>
          <div className="col-start-3 col-span-4 grid lg:grid-cols-4">
            <div className="col-span-2 font-normal text-[#667085]">
              <p className="font-bold text-black">Công Ty Cổ Phần Nông Sản Thực Phẩm Quảng Ngãi</p>
              <p>
                48 Phạm Xuân Hòa, P. Trần Hưng Đạo, TP. Quảng Ngãi, Tỉnh Quãng
                Ngải
              </p>
              <p>
                Điện thoại: (0255) 3827308, 3822529, 3826952, 3819549, 3737279
              </p>
              <p>Email: apfco@apfco.com.vn - Website: apfco.com.vn</p>
            </div>
            <div className="font-medium text-[#101828] ml-3">
              <ul>
                <li>
                  <a href="">Về chúng tôi</a>
                </li>
                <li>
                  <a href="">Quan hệ cổ đông</a>
                </li>
                <li>
                  <a href="">Cơ hội nghề nghiệp</a>
                </li>
              </ul>
            </div>

            <div className="font-medium text-[#101828]">
              <ul>
                <li>
                  <a href="">Tin tức</a>
                </li>
                <li>
                  <a href="">Cơ hội nghề nghiệp</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:col-span-1">
            <img className=" h-[100px]lg:h-[170px] w-full" src="./image/logo_leave.png" alt="logo" />
          </div>
        </div>
        <div className="p-5 lg:grid lg:grid-cols-8 border border-inherit text-[14px] text-[#667085]">
            <div className="text-center col-start-2 col-span-2">
                <p>Copyright © 2022 APFCO. All rights reserved.</p>
            </div>
            <div className="col-end-8 col-span-2 text-center">
                <span className="mr-4 mb-2 lg:mx-8">Chính sách bảo mật</span>
                <span>Điều khoản sử dụng</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
