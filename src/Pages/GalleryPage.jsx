import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [name,setName]=useState('');
  const [message,setMessage]=useState('');
  const sendEmail =()=>{
    emailjs.send(
        'service_8bl84pd',
        'template_syaowpo',
        {
            name:name,
            title:"Website Message",
            message:message,
        },
        'Iols4FM3lnc97qO5h'
    ).then(()=>{
     toast.success("Message sent successfully!");
      setMessage('');
    setName('');
    setShowModal(false);
    }).catch((error)=>{
        toast.error("Something went wrong ");
    })
  }
  return (
    <div className="max-w-[1024px] px-4 py-[40px] mx-auto">
      <div className=" flex flex-col items-center ">
        <img
          src="/Images/valentineDay.png"
          alt="valentine"
          className="w-[320px] h-[150px] md:w-[420px] md:h-[200px]"
        />
        <img
          src="/Images/LoveLetter4.png"
          alt="gallery"
          className="w-[320px] h-auto md:w-[540px]  object-cover"
        />
      </div>
      <div className="flex justify-between max-w-[350px] mx-auto">
        <button
          className="bg-[#E26493] text-white font-love text-[18px] md:text-[20px] px-6 py-2 w-fit rounded-[12px] "
          onClick={()=>setShowModal(true)}
        >
          Reply Me
        </button>
        <button
          className="bg-[#E26493] text-white font-love text-[18px] md:text-[20px] px-6 py-2 w-fit rounded-[12px] "
          onClick={() => navigate("/")}
        >
          Replay
        </button>
      </div>
      

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[300px] md:w-[350px] px-8 py-4 rounded-[16px]">
            <h2 className="font-love text-[18px] md:text-[20px] text-[#f284ac] mb-4 text-center ">
              Send me a message 💌
            </h2>
            <input
  type="text"
  placeholder="Enter your name..."
  className="w-full 
    border border-[#f284ac] 
    rounded-[16px] 
    p-3 
    mb-3
    font-poppins 
    text-[14px]
    text-[#faaeca] 
    outline-none 
    transition-all duration-300
    focus:shadow-[0_0_20px_4px_#f284ac]"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

            <textarea
              rows={7}
                value={message}
  onChange={(e) => setMessage(e.target.value)}
              className=" w-full 
    border border-[#f284ac] 
    rounded-[16px] 
    p-3 
    font-poppins 
    text-[14px]
    text-[#faaeca] 
    outline-none 
    focus:outline-none 
    transition-all duration-300
    focus:shadow-[0_0_20px_4px_#f284ac]"
              placeholder="Type your message here..."
            ></textarea>

            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-400 text-black  px-6 py-2 rounded-[16px] text-[18px] font-love"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="bg-[#E26493] text-white px-6 py-2 rounded-[16px] text-[18px] font-love "
              onClick={sendEmail}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
