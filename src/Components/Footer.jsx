import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1024px] mx-auto flex flex-col items-center mt-[20px] mb-[20px] px-4">
      {/* <h2 className='text-[14px] md:text-[18px] xl:text-[20px] font-love text-[#f284ac]'>Amanidevireddy</h2> */}
      {/* <p className='text-[10px] md:text-[14px] xl:text-[16px] font-montserrat text-[#f284ac]/70'>© 2026 All Rights Reserved </p> */}
      <p className="text-[12px] md:text-[14px] font-montserrat text-[#f284ac]/70 text-center">
        © 2026 Bhanuteja Chiluka • All rights reserved. Heart not open-source
      </p>
      <p
        className="text-[16px] md:text-[18px] xl:text-[20px] font-love text-[#f284ac] mt-2 text-center"
        style={{
          textShadow: "0 0 10px rgba(242,132,172,0.5)",
        }}
      >
        {" "}
        Built with React, powered by 💝 love 💖
      </p>
    </div>
  );
};

export default Footer;


