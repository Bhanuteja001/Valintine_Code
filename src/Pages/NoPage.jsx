import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CongratsModal from "../Components/CongratsModal";

const NoPage = () => {

    const[modalOpen,setModalOpen]=useState(false);
    const navigate=useNavigate('')
   
  return (

    <>
    <div className="max-w-[1024px] mx-auto px-4 md:px-[40px] xl:px-[80px] py-[20px]">
      <div>
        <img
          src="/Images/BackArrow.png"
          alt="back"
          className="w-[24px] h-[24px] md:w-[34px] md:h-[34px] cursor-pointer"
          onClick={()=>navigate('/home')}
        />
        <div className=" flex flex-col items-center gap-4">
          <p
            style={{
              color: "#FAD6E1",
              WebkitTextStroke: "2px #E2599A",
            }}
            className="text-[24px] md:text-[32px] xl:text-[42px] font-love"
          >
            How dare you say NO!
          </p>
          <img
            src="/Images/catImage.png"
            alt="cat"
            className="w-[200px] h-[200px]"
          />
          <h2 className="font-montserrat text-[18px] md:text-[20px] font-semibold">
            Try Valentine Plus Today !
          </h2>
          <div className="flex flex-col gap-2 items-start ">
            <div className="flex justify-center items-center gap-2 ">
              {" "}
              <FaCheck className="text-sm md:text-lg text-[#FF2F6F]" />
              <p className="text-[14px] md:text-[16px] font-poppins">Navigation with no ads</p>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              {" "}
              <FaCheck className="text-sm md:text-lg text-[#FF2F6F]" />
              <p className="text-sm md:text-lg font-poppins">
                Unlock the full valentine experience
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              {" "}
              <FaCheck className="text-sm md:text-lg text-[#FF2F6F]" />
              <p className="text-sm md:text-lg font-poppins">No Cancellations</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#000000] rounded-[4px] px-4 py-2 sm:px-6 sm:py-4 flex flex-col items-start">
              <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] font-poppins font-bold">
                $ 9999 Annual
              </p>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] text-white/75 font-montserrat">$ 87 monthly</p>
            </div>
            <div className="bg-[#E9DDE0] rounded-[4px] px-4 py-2 sm:px-6 sm:py-4 flex flex-col items-start">
              <p className="text-black text-[12px] sm:text-[14px] md:text-[16px]  font-poppins font-bold">
                $ 99 Monthly
              </p>
              <p className=" text-[10px] sm:text-[12px] md:text-[14px] text-black/75 font-montserrat">7 days free trails</p>
            </div>
          </div>
          <p className="flex justify-start font-poppins text-[14px] font-semibold">
            Or just say Yes ...
          </p>
          <button className="bg-[#E26493] px-6 py-4 text-white font-love w-[250px] md:w-[320px] rounded-[16px] text-[18px] hover:text-[20px] " onClick={()=>setModalOpen(true)}>
            Yes
          </button>

        
        </div>
      </div>
    </div>

    <CongratsModal isOpen={modalOpen} onClose={()=>setModalOpen(false)}/>
    </>
    
  );
};

export default NoPage;
