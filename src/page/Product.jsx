import React from "react";
import CarouselCustom from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Product = () => {
  return (
    <>
      <Header />
      <CarouselCustom />
      <div class="flex justify-center mb-6">
        <div class="container px-4 lg:w-2/3">
          <div class="">
            <div class="text-center my-6">
              <h2 class="text-4xl font-bold text-[#019147]">
                TINH BỘT BIẾN TÍNH
              </h2>
            </div>

            <div class="grid lg:grid-cols-2">
              <div class="object-cover">
                <img
                  class="h-[400px] w-full"
                  src="./image/product/image_san.png"
                  alt=""
                />
              </div>
              <div class="text-[15px] text-justify">
                <p>
                  Tinh bột sắn biến tính của chúng tôi đạt yêu cầu về an toàn
                  thực phẩm theo các quy chuẩn, quy định như sau:
                </p>
                <ul class="bg-[#dedede] p-4 list-disc list-inside marker:text-[#019147] leading-7 my-4">
                  <li>TCVN 10546:2014 về “Tinh bột sắn".</li>
                  <li>
                    Quy định 46/2007/QĐ-BYT về "Giới hạn tối đa ô nhiễm sinh học
                    và hóa học trong thực phẩm”.
                  </li>
                  <li>
                    TCVN 4-18:2011/BYT về “Phụ gia thực phẩm – nhóm chế phẩm
                    tinh bột”.
                  </li>
                </ul>
                <p class="text-[#019147] my-2 font-bold">Quy cách đóng gói:</p>
                <p>
                  - Khối lượng tịnh: Loại 25kg, 50kg, 500kg, 850kg và tùy theo
                  nhu cầu của thị trường trọng lượng có thể thay đổi cho phù
                  hợp.
                </p>
                <p>- Sản phẩm được đóng gói bằng bao PP+PE, bao giấy.</p>
                <p class="mt-4">
                  Hiện nay, công ty sản xuất 7 loại tinh bột sắn biến tính cơ
                  bản với các cấp độ biến tính khác nhau tùy theo yêu cầu của
                  khách hàng, chúng tôi hiện sản xuất các loại tinh bột sắn biến
                  tính bao gồm:{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="h-fit">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
                ACETYLATED DISTARCH ADIPATE - E.1422
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-6 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-6 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-6 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-6 py-1">BU</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 65,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                </table>
              </div>
              <div class="">
                <div class="text-[15px] leading-7">
                  <p class="text-[#019147] font-bold my-2 ">2. Đặc tính</p>
                  <ul class="product__group1-list">
                    <li>- Tạo đô sánh, độ dày cho sản phẩm</li>
                    <li>- Ngăn khả năng rỉ nước</li>
                    <li>
                      - Chịu được nhiệt độ cao nên không bị vỡ hoặc phá cấu trúc
                      trong quá trình gia nhiệt
                    </li>
                    <li>- Không bị bể, vỡ trong quá trình khuấy trộn</li>
                  </ul>
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Sản xuất tương ớt, tương cà, tưởng phở</li>
                    <li>- Các loại nước sốt, xúc xích, bò viên, cá viên,...</li>
                    <li>
                      - Các loại sản phẩm thịt viên, cá viên, bò viên, chả cá
                      tươi.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <img
                  class="h-[400px]  w-full object-cover"
                  src="./Links/tuongot.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="h-fit">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
                ACETYLATED STARCH - E.1420
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="">
                <img
                  class="h-[400px] w-full object-cover"
                  src="./Links/img_product_mi.jpeg"
                  alt=""
                />
              </div>

              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-6 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-6 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-6 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-6 py-1">BU</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 65,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-6 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-6 py-1">%</td>
                    <td class="border border-slate-300 px-6 py-1">≥ ,0</td>
                  </tr>
                </table>
              </div>
              <div class="">
                <div class="text-[15px] leading-7 text-justify">
                  <p class="text-[#019147] font-bold my-2 ">2. Đặc tính</p>
                  <ul class="product__group1-list">
                    <li>- Tạo đô sánh, độ dày cho sản phẩm</li>
                    <li>- Ngăn khả năng rỉ nước</li>
                    <li>
                      - Chịu được nhiệt độ cao nên không bị vỡ hoặc phá cấu trúc
                      trong quá trình gia nhiệt
                    </li>
                    <li>- Không bị bể, vỡ trong quá trình khuấy trộn</li>
                  </ul>
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Sản xuất tương ớt, tương cà, tưởng phở</li>
                    <li>- Các loại nước sốt, xúc xích, bò viên, cá viên,...</li>
                    <li>
                      - Các loại sản phẩm thịt viên, cá viên, bò viên, chả cá
                      tươi.
                    </li>
                  </ul>
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

export default Product;
