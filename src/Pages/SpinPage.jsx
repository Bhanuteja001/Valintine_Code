// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SpinPage = () => {
//   const navigate = useNavigate();
//   const items = ["TryAgain :)", " HUGS", "Holding Hands", " KISSES", "CUDDLES"];

//   const [rotation, setRotation] = useState(0);
//   const [spinCount, setSpinCount] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [showClaimPopup, setShowClaimPopup] = useState(false);
//   const [winner, setWinner] = useState(null);

//   const handleSpin = () => {
//     // 🔥 FIXED: Check spinCount BEFORE increment, allow 3 spins
//     if (spinCount >= 3 || isSpinning) return;

//     setIsSpinning(true);
//     setShowPopup(false);

//     let selectedSlice;
//     if (spinCount === 0) selectedSlice = { name: "KISSES", center: 252 };
//     else if (spinCount === 1) selectedSlice = { name: "CUDDLES", center: 324 };
//     else if (spinCount === 2) selectedSlice = { name: "HUGS", center: 108 };

//     const spins = 2 * 360;
//     const extraRotation = 360 - selectedSlice.center;
//     const targetRotation = spins + extraRotation;

//     setRotation(targetRotation);

//     setTimeout(() => {
//       setWinner(selectedSlice.name);
//       setSpinCount((prev) => prev + 1); // 0→1, 1→2, 2→3
//       setShowPopup(true);
//       setIsSpinning(false);
//     }, 4000);
//   };

//   return (
//     <div className="bg-[#FAD6E1 ] h-screen">
//       <div className="max-w-[1024px] mx-auto">
//         <div className="p-8 flex flex-col items-center gap-2">
//           <h1
//             style={{ color: "#FFFFFF", WebkitTextStroke: " 2px #E2599A" }}
//             className="text-[28px] md:text-[32px] xl:text-[42px] font-love text-center"
//           >
//             Spin the wheel and win coupons
//           </h1>

//           <h2 className="text-[14px] md:text-[18px] text-[#EA4986] font-poppins font-semibold text-center">
//             You've got {3 - spinCount} times to spin! Trust your gut!
//           </h2>

//           <div className="mt-[20px] relative">
//             {/* pointer  */}
//             {!showPopup && !showClaimPopup && (
//               <div className="absolute left-1/2 -top-1 -translate-x-1/2 z-20 ">
//                 <div
//                   className="w-0 h-0 
//         border-l-[15px] border-l-transparent
//         border-r-[15px] border-r-transparent
//         border-t-[25px] border-t-[#FFD42A]"
//                 />
//               </div>
//             )}

//             {/* wheel */}

//             <div className="relative w-[300px] h-[300px]">
//               <div
//                 className="absolute inset-0  rounded-full border-[8px] border-[#A02956] "
//                 style={{
//                   transform: `rotate(${rotation}deg)`,
//                   transition: isSpinning ? "transform 4s ease-out" : "none",
//                   boxShadow: "0 0 0 8px #EA4986",
//                   background: `

//                     conic-gradient(
//                      from   0deg at 50% 50%,
//     #EA4986 0deg 1deg,
//     #FAD6E1 1deg 72deg,

//     #EA4986 72deg 73deg,
//     #A80006 73deg 144deg,

//     #EA4986 144deg 145deg,
//     #FAD6E1 145deg 216deg,

//     #EA4986 216deg 217deg,
//     #A80006 217deg 288deg,

//     #EA4986 288deg 289deg,
//     #FAD6E1 289deg 360deg
//   )


//                     `,
//                 }}
//               >
//                 {items.map((item, index) => {
//                   const angle = index * 72 + 36;

//                   return (
//                     <div
//                       key={index}
//                       className="absolute left-1/2 top-1/2 text-center font-love text-[18px] text-[#EA4986] "
//                       style={{
//                         transform: `
//           translate(-50%, -50%)
//           rotate(${angle}deg)
//           translateY(-100px)
//         `,
//                       }}
//                     >
//                       {item}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <button
//             className="mt-8 bg-[#E26493] font-love text-[18px] text-white px-8 py-4 rounded-[8px] w-[250px]"
//             onClick={handleSpin}
//             disabled={spinCount >= 3 || isSpinning}
//           >
//             Spin
//           </button>

//           {showPopup && (
//             <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
//               <div className="p-8 bg-white rounded-[12px] flex flex-col gap-4 w-[320px] items-center">
//                 <img
//                   src="/Images/Gift.png"
//                   alt="gift"
//                   className="w-[201px] h-[130px]"
//                 />
//                 <h1
//                   style={{ color: "#FAD6E1", WebkitTextStroke: "1px #E2599A" }}
//                   className="text-[28px] font-love text-center"
//                 >
//                   Congratulations!!
//                 </h1>

//                 <h2 className="text-[16px] font-semibold font-poppins text-[#EA4986] ">
//                   You won  Free {winner}
//                 </h2>

//                 <button
//                   className="bg-[#E26493] text-white text-[18px] font-love w-full py-4 rounded-[6px]"

//                   onClick={() => {
//                     setShowPopup(false);
//                     setTimeout(() => {
//                       setRotation(0);
//                       setIsSpinning(false);


//                       if (spinCount === 3) {
//                         setShowClaimPopup(true);
//                       }
//                     }, 300);
//                   }}
//                   w
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           )}

//           {showClaimPopup && (
//             <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
//               <div className="px-8 py-6 bg-white rounded-[12px] flex flex-col items-center gap-2 max-w-[300px]">
//                 <img
//                   src="/Images/claimgifts.png"
//                   alt="claim-gift"
//                   className="w-[300px] h-[150px]"
//                 />
//                 <h1
//                   style={{ color: "#FAD6E1", WebkitTextStroke: "1px #E2599A" }}
//                   className="text-[28px] font-love text-center"
//                 >
//                   Congratulations!!
//                 </h1>

//                 <h2 className="font-poppins text-[#EA4986] text-[14px] font-semibold">
//                   You won 3 coupons
//                 </h2>

//                 <button
//                   className="mt-4 bg-[#EA4986] text-white font-love text-[18px] px-8 py-4 rounded-[12px] w-full"
//                   onClick={() => navigate("/coupon")}
//                 >
//                   Claim Now
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpinPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ITEMS = ["TryAgain😥", "HUGS", "Holding Hands", "KISSES", "CUDDLES"];
const MAX_SPINS = 3;
const SLICE_ANGLE = 360 / ITEMS.length;

const SpinPage = () => {
  const navigate = useNavigate();

  const [rotation, setRotation] = useState(0);
  const [spinCount, setSpinCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [popup, setPopup] = useState(null); // null | "win" | "claim"
  const [SaveResult, setSaveResult] = useState("");
  const [result, setResult] = useState("");
  const [results, setResults] = useState([]);

  const handleSpin = () => {
    if (spinCount >= MAX_SPINS || isSpinning) return;

    setIsSpinning(true);
    setPopup(null);

    const randomIndex = Math.floor(Math.random() * ITEMS.length);
    const sliceCenter = randomIndex * SLICE_ANGLE + SLICE_ANGLE / 2;

    const spins = 2 * 360;
    const extraRotation = 360 - sliceCenter;
    const targetRotation = rotation + spins + extraRotation;

    setRotation(targetRotation);

    setTimeout(() => {
      setResult(ITEMS[randomIndex]);
      setResults(prev => [...prev, ITEMS[randomIndex]]);
      const newCount = spinCount + 1;
      setSpinCount(newCount);
      setIsSpinning(false);

      setPopup("win");
    }, 4000);
  };

  return (
    <div className="bg-[#FAD6E1 ] h-screen">
      <div className="max-w-[1024px] mx-auto">
        <div className="p-8 flex flex-col items-center gap-2">
          <h1
            style={{ color: "#FFFFFF", WebkitTextStroke: " 2px #E2599A" }}
            className="text-[28px] md:text-[32px] xl:text-[42px] font-love text-center"
          >
            Spin the wheel and win coupons
          </h1>

          <h2 className="text-[14px] md:text-[18px] text-[#EA4986] font-poppins font-semibold text-center">
            You've got {MAX_SPINS - spinCount} times to spin! Trust your gut!
          </h2>

          <div className="mt-[20px] relative">
            {!popup && (
              <div className="absolute left-1/2 -top-1 -translate-x-1/2 z-20 ">
                <div className="w-0 h-0 
                  border-l-[15px] border-l-transparent
                  border-r-[15px] border-r-transparent
                  border-t-[25px] border-t-[#FFD42A]" />
              </div>
            )}

            <div className="relative w-[300px] h-[300px]">
              <div
                className="absolute inset-0 rounded-full border-[8px] border-[#A02956]"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? "transform 4s ease-out" : "none",
                  boxShadow: "0 0 0 8px #EA4986",
                  background: `
                    conic-gradient(
                      from 0deg at 50% 50%,
                      #EA4986 0deg 1deg,
                      #FAD6E1 1deg 72deg,
                      #EA4986 72deg 73deg,
                      #A80006 73deg 144deg,
                      #EA4986 144deg 145deg,
                      #FAD6E1 145deg 216deg,
                      #EA4986 216deg 217deg,
                      #A80006 217deg 288deg,
                      #EA4986 288deg 289deg,
                      #FAD6E1 289deg 360deg
                    )
                  `,
                }}
              >
                {ITEMS.map((item, index) => {
                  const angle = index * SLICE_ANGLE + SLICE_ANGLE / 2;

                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 text-center font-love text-[18px] text-[#EA4986]"
                      style={{
                        transform: `
                          translate(-50%, -50%)
                          rotate(${angle}deg)
                          translateY(-100px)
                        `,
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            className="mt-8 bg-[#E26493] font-love text-[18px] text-white px-8 py-4 rounded-[8px] w-[250px]"
            onClick={handleSpin}
            disabled={spinCount >= MAX_SPINS || isSpinning}
          >
            Spin
          </button>

          {popup === "win" && (
            <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
              <div className="p-8 bg-white rounded-[12px] flex flex-col gap-4 w-[320px] items-center">
                <img src="/Images/Gift.png" alt="gift" className="w-[201px] h-[130px]" />
                <h1
                  style={{ color: "#FAD6E1", WebkitTextStroke: "1px #E2599A" }}
                  className="text-[28px] font-love text-center"
                >
                  Congratulations!!!
                </h1>

                <h2 className="text-[16px] font-semibold font-poppins text-[#EA4986]">
                  {result === "TryAgain😥"
                    ? "Oops! Better luck next time 💔"
                    : `You won Free ${result}`}
                </h2>

                <button
                  className="bg-[#E26493] text-white text-[18px] font-love w-full py-4 rounded-[6px]"
                  onClick={() => spinCount === MAX_SPINS ? navigate("/coupon", { state: { results } }) : setPopup(null)}
                >
                  {spinCount === MAX_SPINS ? "Claim Now" : "Continue"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpinPage;