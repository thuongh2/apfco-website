import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselCustom = () => {
  return (
    <>
      <Carousel
        swipeable={true}
        infinite={true}
        draggable={false}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        showDots={true}
      >
        <div>
          <div className="">
            <div className="absolute left-[15%] bottom-[30%] text-white text-[40px] font-bold">
              <h1>
                APFCO khánh thành <p>công ty con thứ 2 tại Lào</p>
              </h1>
              <button className="rounded-lg  text-lg bg-[#EA2127] hover:bg-red-600 h-10 w-[45%]">
                Tìm hiểu thêm
              </button>
            </div>
            <img src="./image/banner-1.png" class="d-block w-100" alt="..." />
          </div>
        </div>

        <div>
          <div className="">
            <div className="absolute left-[15%] bottom-[30%] text-white text-[40px] font-bold">
              <h1>
                APFCO khánh thành <p>công ty con thứ 2 tại Lào</p>
              </h1>
              <button className="rounded-lg  text-lg bg-[#EA2127] hover:bg-red-600 h-10 w-[45%]">
                Tìm hiểu thêm
              </button>
            </div>
            <img src="./image/banner-1.png" class="d-block w-100" alt="..." />
          </div>
        </div>

        <div>
          <div className="">
            <div className="absolute left-[15%] bottom-[30%] text-white text-[40px] font-bold">
              <h1>
                APFCO khánh thành <p>công ty con thứ 2 tại Lào</p>
              </h1>
              <button className="rounded-lg  text-lg bg-[#EA2127] hover:bg-red-600 h-10 w-[45%]">
                Tìm hiểu thêm
              </button>
            </div>
            <img src="./image/banner-1.png" class="d-block w-100" alt="..." />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselCustom;
