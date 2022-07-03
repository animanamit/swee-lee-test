/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";

const SplashImage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="md:h-[30rem] min-h-fit sm:flex sm:flex-col w-full overflow-y-hidden md:relative bg-black">
      <img
        src={
          isMobile
            ? "https://cdn.shopify.com/s/files/1/2098/9809/files/Small_750x750_2x_Zane_Carney_750x750_crop_center.jpg?v=1620631149"
            : "https://blog.monocreators.com/uploads/2020/03/Image-1-26-20-at-12.52-AM.jpg"
        }
        height={isMobile ? "30rem" : "100%"}
        width={"100%"}
        alt="photo of Adam Blackstone and Brian Frasier-Moore"
        className=" opacity-50"
      />
      <div className="md:absolute md:text-left text-center flex flex-col justify-center md:right-4 md:w-72 py-8 md:top-[25%] px-8 md:py-0">
        {isMobile ? (
          <h3 className="uppercase font-bold text-white text-xl py-4 text-center">
            featured artists
          </h3>
        ) : (
          <>
            <h3 className="text-white font-bold text-5xl uppercase">
              featured
            </h3>
            <h3 className="text-white font-bold text-5xl uppercase">artists</h3>
          </>
        )}
        <h4 className="text-white text-sm mt-2">
          Adam Blackstone and Brian Frasier-Moore discuss Super Bowl 2020 and
          more.
        </h4>
        <button className="bg-orange-500 md:mt-2 mt-6 text-white md:px-4 px-9 md:py-2 py-3 rounded-sm uppercase tracking-loose font-semibold text-sm max-w-fit mx-auto md:mx-0 ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default SplashImage;
