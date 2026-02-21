import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CongratsModal from './CongratsModal';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate();
    return (
        <div className='max-w-[1024px] mx-auto flex flex-col items-center font-love'>

            <img src="/Images/Feb14.png" className='w-[500px] h-[400px] md:w-[500px] md:h-[400px] object-cover ' />
            <div className='flex flex-col items-center gap-4'>
                <p style={{
                    color: "#FAD6E1",
                    WebkitTextStroke: "1px #E2599A"
                }} className='text-[24px] md:text-[32px] xl:text-[42px] font-bold '>Will you  be my  Valentine ?</p>

                <button className='bg-[#E26493] text-white px-6 py-4 rounded-[16px] w-[250px] md:w-[350px] text-[18px] md:text-[24px]' onClick={() => setModalOpen(true)}>Yes</button>
                <button className='bg-[#3E000C] text-white px-6 py-4 rounded-[16px] w-[250px] md:w-[350px] text-[18px] md:text-[24px]' onClick={() => navigate('/no')}>No</button>
            </div>


            <CongratsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Home;