import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CouponPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const results = location.state?.results || [];

  const getCoupon = (result) => {
    switch (result) {
      case "KISSES": return { src: "/Images/Kisses.png", name: "Free Kisses" };
      case "CUDDLES": return { src: "/Images/Cuudles.png", name: "Free Cuddles" };
      case "HUGS": return { src: "/Images/Hugs.png", name: "Free Hugs" };
      case "Holding Hands": return { src: "/Images/Hugs.png", name: "Free Holding Hands" };
      case "TryAgain😥": return { src: null, name: "Try Again" };
      default: return null;
    }
  };

  const coupons = results.map(getCoupon).filter(Boolean);
  return (
    <div className="max-w-[1024px] mx-auto px-4  py-8 flex flex-col items-center justify-center gap-6">
      <h1
        className="text-[28px] md:text-[32px] xl:text-[42px] font-love text-center"
        style={{ color: "#FAD6E1", WebkitTextStroke: "2px #E2599A" }}
      >
        MyCoupons
      </h1>
      <div className="flex flex-col gap-6">
        {coupons.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md px-8 py-6 rounded-[12px] flex items-center border-t "
          >
            <div className="absolute -left-4 w-8 h-8 rounded-full bg-white border-r-2"></div>
            <div className="absolute -right-4 w-8 h-8 rounded-full bg-white border-l-2"></div>

            {item.src ? (
              <>
                <img src={item.src} alt={item.name} className=" w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />

                <div className="border-l-2 border-dashed border-gray-300 mx-6 h-16"></div>

                <div className="flex flex-col justify-between gap-4">
                  <h1 className="text-[16px] md:text-[18px] font-poppins ">{item.name}</h1>
                  <p className="text-[12px] md:text-[14px] font-montserrat text-black/30 ">
                    Valid until 31 February 2026
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <h1 className="text-[16px] md:text-[18px] font-poppins text-center">{item.name}</h1>
                <p className="text-[12px] md:text-[14px] font-montserrat text-black/30 text-center">
                  Better luck next time!
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-[40px] flex flex-col items-center gap-4 px-8  py-6 rounded-[12px]" style={{
        boxShadow: "0 0 25px 8px #FAD6E1", // pink glow
        borderRadius: "15px", // matches your card’s rounded corners
      }}>
        <img src="/Images/Letter.png" alt="letter" className="w-[100px] h-[100px]md:w-[200px] ms:h-[200px]" />
        <h2 className="font-love text-[26px] md:text-[32px]" style={{
          color: "#FAD6E1",
          WebkitTextStroke: "2px #E2599A"
        }}> You’ve got a letter!</h2>
        <button className="bg-[#E26493] text-[18px] md:text-[20px] font-love text-white px-8 py-4 rounded-[12px] w-full" onClick={() => navigate('/letter')}>Tap to read</button>

      </div>
    </div>
  );
};

export default CouponPage;
