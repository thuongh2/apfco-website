import React from "react";
import CarouselCustom from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Product = () => {
  return (
    <>
      <Header />
      <CarouselCustom />
      <div class="flex justify-center my-9">
        <div class="container px-4 md:px-0 w-[90%] lg:w[65%] 2xl:w-2/3">
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

          <div class="h-fit my-16">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
                ACETYLATED DISTARCH ADIPATE - E.1422
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3  gap-4">
              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-4 py-1">BU</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 65,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 90,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ tro</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,20</td>
                  </tr>
              
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">SO2</td>
                    <td class="border border-slate-300 px-4 py-1">ppm</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 30,0</td>
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

          <div class="h-fit my-16">
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
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-4 py-1">BU</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 65,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 90,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ tro</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,20</td>
                  </tr>
              
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">SO2</td>
                    <td class="border border-slate-300 px-4 py-1">ppm</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 30,0</td>
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

          <div class="h-fit my-16">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
                ACETYLATED STARCH - E.1421
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-4 py-1">BU</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 750</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,010</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 90,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ tro</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,20</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ xơ</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,50</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                </table>
              </div>
              <div class="">
                <div class="text-[15px] leading-7">
                  <p class="text-[#019147] font-bold my-2 ">2. Đặc tính</p>
                  <ul class="">
                    <li>- Giảm nhiệt độ đông keo của tinh bột.</li>
                    <li>- Tăng độ sánh và trong suôt, giúp cải thiện bề mặt sản phẩm.</li>
                    <li>
                      - Cải tạo sự ổn định trong quán trình đông đặc, làm tan.
                    </li>
                    <li>- Cải thiện khả năng giữ nuuocws.</li>
                  </ul>
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Mì ăn liền, bún, miến.</li>
                    <li>- Thực phẩm đông lạnh.</li>
                    <li>
                      - Dăm bông, xúc xích, bánh cảo, thức ăn thủy sane.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <img
                  class="h-[400px]  w-[500px] object-contain"
                  src="./Links/xucxich.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="h-fit">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
               DISTARCH PHOSPHATE - E.1412
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="">
                <img
                  class="h-[400px] w-[500px] object-contain"
                  src="./Links/E1412.jpg"
                  alt=""
                />
              </div>

              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-4 py-1">BU</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 65,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 90,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ xơ</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,50</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">SO2</td>
                    <td class="border border-slate-300 px-4 py-1">ppm</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 30,0</td>
                  </tr>
                </table>
              </div>
              <div class="">
                <div class="text-[15px] leading-6 text-justify">
                  <p class="text-[#019147] font-bold my-2 ">2. Đặc tính</p>
                  <ul class="product__group1-list">
                    <li>- Chất ổn định, làm dày. Tăng độ giòn dai cho các sản phẩm.</li>
                    <li>- Cấu trúc sản phẩm vững chắc hơn, ít bị phá hỏng, vỡ khi thời gian nấu dài, trong môi trường axit hoặc khi bị khuấy trộn mạnh.</li>
                    <li>
                      - Hạn chế sự trương nở của các hạt tinh bột khi nấu lên, chống hiện tượng rỉ nước.
                    </li>
                    <li>- Có thể sử dụng trong quá trình chế biến có độ pH thấp, nhiệt độ cao.</li>
                  </ul>
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Làm đặc và tăng độ dai tự nhiên cho bún, phở, hủ tiếu, bún bò.</li>
                    <li>- Chống hiện tượng rỉ nước: như cá hộp, thịt hộp, tương ớt, tương cà, thịt viên, cá viên, xúc xích, chả cá, chả lụa.</li>
                    <li>
                      - Làm chất độn cho máy in, ngành giấy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="h-fit my-16">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
                ACETYLATED DISTARCH PHOSPHATE - E.1414
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-4 py-1">BU</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 750</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,010</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 90,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ tro</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,20</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ xơ</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,50</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">SO2</td>
                    <td class="border border-slate-300 px-4 py-1">ppm</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 30,0</td>
                  </tr>
                </table>
              </div>
              <div class="">
                <div class="text-[15px] leading-7">
                  <p class="text-[#019147] font-bold my-2 ">2. Đặc tính</p>
                  <ul class="">
                    <li>- Ổn định vượt trội về sự đông đặc - làm tan của các sản đông lạnh, độ trong suốt tốt, khả năng ổn định cao, khả năng chống thoái hóa cấu trúc tốt.</li>
                    <li>- Được ứng dụng như chất ổn định, chất làm dày và chất nhũ hóa trong sản xuất thực phẩm.</li>
                  </ul>
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Thực phẩm đóng hộp, thực phẩm đông lạnh.</li>
                    <li>- Nước chấm, tương ớt, nước cà chua, xúp, nước ép thịt.</li>
                    <li>
                      - Các thực phẩm nướng, quay…
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <img
                  class="h-[400px]  w-[500px] object-fill"
                  src="./Links/thitvien.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="h-fit">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
              OXIDIZED STARCH - E.1404
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="">
                <img
                  class="h-[400px] w-[500px] object-contain"
                  src="./Links/giay.jpg"
                  alt=""
                />
              </div>

              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 85,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 13,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ dẻo</td>
                    <td class="border border-slate-300 px-4 py-1">CPs</td>
                    <td class="border border-slate-300 px-4 py-1">10 - 3.000</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 99,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,10</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 91,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ tro</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,20</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ xơ</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,50</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">SO2</td>
                    <td class="border border-slate-300 px-4 py-1">ppm</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 30,0</td>
                  </tr>
                </table>
              </div>
              <div class="">
                <div class="text-[15px] leading-6 text-justify">
                  <p class="text-[#019147] font-bold my-2 ">2. Đặc tính</p>
                  <ul class="product__group1-list">
                    <li>- Lực tạo màng mỏng tốt, ít hút nước.</li>
                    <li>- Giảm hiện tượng oxy hóa.</li>
                    <li>
                      - Hạn chế sự trương nở của các hạt tinh bột khi nấu lên, chống hiện tượng rỉ nước.Tạo bề mặt sản phẩm láng bóng.
                    </li>
                   
                  </ul>
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Ngành giấy: tăng tỷ lệ thu hồi bột giấy, tráng phủ bề mặt giấy. Làm keo dán trong sản xuất tấm trần thạch cao, keo dán trong sản xuất bao bì carton.</li>
                    <li>
                      - Ngành thực phẩm như: bánh, kẹo dẻo, nước sốt đóng hộp, bánh plan, bánh xốp, kẹo dẻo, hạt nêm…
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="h-fit my-16">
            <div class="flex justify-center text-center my-6">
              <h2 class=" lg:w-2/3 py-2 bg-[#019147] rounded-full text-xl lg:text-2xl font-bold text-white">
              PREGELATINIZED TAPIOCA STARCH (ALPHA STARCH)
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="text-[15px]">
                <p class="mb-2 text-[#019147] font-bold">
                  1. Tiêu chuẩn kĩ thuật
                </p>
                <table class="table-auto border-collapse border border-slate-400">
                  <tr>
                    <th class="border border-slate-300 px-4 py-1  ">
                      Chỉ tiêu
                    </th>
                    <th class="border border-slate-300 px-4 py-1 ">ĐVT</th>
                    <th class="border border-slate-300 px-4 py-1 ">Quy cách</th>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tinh bột</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 90,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ ẩm</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 8,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ mịn</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 80,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Tạp chât</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ ,020</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ trắng</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≥ 80,0</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">Độ tro</td>
                    <td class="border border-slate-300 px-4 py-1">%</td>
                    <td class="border border-slate-300 px-4 py-1">≤ 0,20</td>
                  </tr>
          
                  <tr>
                    <td class="border border-slate-300 px-4 py-1">pH</td>
                    <td class="border border-slate-300 px-4 py-1"></td>
                    <td class="border border-slate-300 px-4 py-1">0,5 ÷ 7.0</td>
                  </tr>
                </table>
                <p class="text-[#019147] font-bold my-2 mt-3">2. Đặc tính</p>
                  <ul class="">
                    <li>- Lực tạo màng mỏng tốt, ít hút nước.</li>
                    <li>- Giảm hiện tượng oxy hóa.</li>
                    <li>
                      - Tạo bề mặt sản phẩm láng bóng.
                    </li>
                  </ul>
              </div>
              <div class="">
                <div class="text-[15px] leading-7">
                  
                  <p class="text-[#019147] font-bold my-2 ">3. Ứng dụng</p>
                  <ul>
                    <li>- Ngành công nghiệp thực phẩm: Tinh bột alpha được sử dụng làm chất làm đặc hoặc chất ổn định trong các sản phẩm thực phẩm và đồ uống sữa, thực phẩm đông lạnh, đồ uống chức năng, thực phẩm bột, nước sốt, nước giải khát</li>
                    <li>- Trong công nghiệp mỹ phẩm: Tinh bột alpha được sử dụng như một thành phần phụ gia trong các sản phẩm mỹ phẩm. Nó sử dụng làm chất pha loãng viên nang, làm chất kết dính và cho phép tinh bột hấp thụ nước dễ dàng và giúp cho viên thuốc tan đúng cách.</li>
                    <li>
                      - Trong ngành công nghiệp sản xuất thức ăn: Tinh bột alpha dễ tan trong nước, hấp thụ nhanh nên được sử dụng làm chất làm đặc, chất kết dính trong thức ăn gia súc, thức ăn thủy sản.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="">
                <img
                  class="h-[400px]  w-[500px] object-cover"
                  src="./Links/ca1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        {/* add ca */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
