import React from 'react';
import { useNavigate } from 'react-router-dom';


const LockPage = () => {

    const navigate = useNavigate()
    return (
        
        <div className='max-w-[1024px] mx-auto  flex flex-col justify-between items-center ' >
            <img src="/Images/Lock.png" className='w-[600px] h-[600px] md:w-[550px] md:h-[550px] xl:w-[600px] object-cover cursor-pointer' onClick={()=>navigate("/home")}/>
            <img src="/Images/Loader.png" className='w-[24px] h-[24px] md:w-[48px] md:h-[48px]'/>
        </div>
    );
};

export default LockPage;