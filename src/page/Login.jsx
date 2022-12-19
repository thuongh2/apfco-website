import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";

const Login = () => {
  return (
    <>
      <Header />
      <div class="">
        <div class="bg-[url('https://res.cloudinary.com/djqfsurdo/image/upload/v1671387672/background_login_kktzgg.png')]">
          <div class="h-full w-[80]">
            <div class="p-5 py-20 lg:p-30 flex justify-center items-center">
              <div class="grid lg:grid-cols-12 gap-4">
                <div class="text-white col-start-2 col-span-4">
                  <div class="text-[60px] font-semibold">LÀM VIỆC</div>
                  <div class="text-[22px]">
                    <p>Xin chào, đât là mạng lưới làm việc nội bộ của APFCO</p>
                    <p>Vui lòng nhập tên tài khoản và mật khẩu để truy cập</p>
                  </div>
                </div>
                <div class="col-start-7 col-span-7">
                  <div class="grid lg:grid-cols-12 gap-4">
                    <div class="h-fit w-[400px] bg-white rounded-[20px]">
                      <form class="flex justify-center my-8">
                        <div class="w-[300px]">
                          <div class="form_main__user">
                            <div class="text-center text-[18px] font-bold text-[#019147] my-4">
                              <label>Tên truy cập/ Username</label>
                            </div>
                            <div>
                              <input
                                type="text"
                                class="bg-gray-200 px-4 w-full h-10 transition delay-150 duration-500 ease-in-out rounded-lg focus:outline-[#019147] hover:delay-300"
                              />
                            </div>
                          </div>
                          <div class="form_main__user">
                            <div class="text-center text-[18px] font-bold text-[#019147] my-4">
                              <label>Mật khẩu/ Password</label>
                            </div>
                            <div class="">
                              <input
                                type="password"
                                class="bg-gray-200 px-4 w-full h-10 transition delay-150 duration-500 ease-in-out rounded-lg focus:outline-[#019147]"
                              />
                            </div>
                          </div>
                          <div class="flex justify-center my-5">
                            <input
                              class=" text-white bg-[#019147] w-2/3 h-10 rounded-full hover:cursor-pointer"
                              type="button"
                              value="Đăng Nhập"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="w-12 col-start-11 xl:col-start-9 col-span-1">
                      <ul class="form_icon_list">
                        <li class="w-12 h-12 mb-2 hover:cursor-pointer">
                          <a>
                            <img src="./image/logo/yt.png" alt="" />
                          </a>
                        </li>
                        <li class="w-12 h-12 my-2 hover:cursor-pointer">
                          <a>
                            <img src="./image/logo/gg.png" alt="" />
                          </a>
                        </li>
                        <li class="w-12 h-12 my-2 hover:cursor-pointer">
                          <a>
                            <img src="./image/logo/fb.png" alt="" />
                          </a>
                        </li>
                        <li class="w-12 h-12 my-2 hover:cursor-pointer">
                          <a>
                            <img src="./image/logo/gb.png" alt="" />
                          </a>
                        </li>
                        <li class="w-12 h-12 my-2 hover:cursor-pointer">
                          <a>
                            <img src="./image/logo/tw.png" alt="" />
                          </a>
                        </li>
                        <li class="form_icon__item hover:cursor-pointer">
                          <a>
                            <img src="./image/logo/ig.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
