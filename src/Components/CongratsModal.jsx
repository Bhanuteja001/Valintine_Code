import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CongratsModal = ({isOpen ,onClose}) => {
     const[modalOpen,setModalOpen]=useState(false)
    const navigate = useNavigate();

    if (!isOpen) return null;
  
    return (
        <div>


            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className=" bg-white px-6 py-4 md:px-8 md:py-8 rounded-[12px] flex flex-col gap-8 max-w-[300px] md:max-w-[450px] items-center">
                    <div>
                    <h1 style={{color:"#FAD6E1",
                        WebkitTextStroke:"2px #E2599A"
                    }} className="text-[28px] md:text-[32px] font-love text-center">Congratulations!!</h1>
                    <p className="font-poppins text-[14px] text-[#F08BA9] text-center"><span className="text-[#EA4986] font-bold text-[16px]">You have made the right choice -</span>Since the day you choose me actually hahahahahah</p>
                    </div>

                    <button className="bg-[#E26493] text-white text-[18px] md:text-[20px] font-love w-full py-4 rounded-[6px]"onClick={()=>navigate('/spin')}>Continue</button>

                </div>

            </div>

   
            
        </div>
    );
};

export default CongratsModal;