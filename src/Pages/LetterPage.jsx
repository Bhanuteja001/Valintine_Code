import React from 'react';
import { useNavigate } from 'react-router-dom';

const LetterPage = () => {
    const navigate=useNavigate();
    return (
        <div className='max-w-[1024px] mx-auto flex h-screen items-center justify-center  px-4 py-8'>

            <div className='flex flex-col items-center gap-6'>
                <img src="/Images/final-letter.png" alt="envelope" className='w-[250px] h-[200px] md:w-[350px] md:h-[300px] object-cover' style={{boxShadow:'0px 0px 25px 8px #fe92b2'}}
                onClick={()=>navigate('/gallery')}/>
                <h2 className='font-love text-[30px] md:text-[32px] xl:text-[42px] text-center' style={{color:"#FAD6E1",
                    WebkitTextStroke:"2px #E2599A"
                }}>Tap the envelope to open ...</h2>
            </div>
        </div>
    );
};

export default LetterPage;