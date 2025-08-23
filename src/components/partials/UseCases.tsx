// "use client";
// import React from "react";
// import Image from "next/image";

// const UseCases: React.FC = () => {
//   return (
//     <section className="relative w-full bg-[#FFF7FF] mt-[50px] xl:mt-0">
//       {/* Sticky Title */}
//       <div className="relative xl:sticky bg-[#FFF7FF] top-0 z-20 py-[20px] xl:py-[50px]" style={{
//           backgroundImage: "url(/img/use-cases/use-cases-pattern-bg.png)",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center top",
//         }}>
//         <h2 className="text-[32px] xl:text-[48px] leading-[32px] xl:leading-[60px] -tracking-[0.02em] text-[#270A26] font-[500] text-center font-fraunces">
//           Use Cases
//         </h2>
//       </div>

//       {/* Panels (they just stack + scroll) */}
//       <div className="xl:flex flex-col w-full mt-[50px]">
            
//         {/* Panel 1 */}
//         <div className="panel w-full h-inherit xl:h-screen flex items-center justify-center bg-[#FFF7FF] p-[12px] xl:px-[32px]">
//           <div className="w-full rounded-[16px] bg-[#F7E6F7] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px] mx-auto">
//             <div className="w-full">
//               <span className='w-max px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-[#AF01AF] bg-gradient-to-b from-[#d85cc51a] to-[#ff3fec1a]'>
//                   <Image src='/img/icons/luggage-02.svg' width={24} height={24} alt=''  />
//                   BMONI for Nomads
//               </span>
//               <h3 className="font-fraunces mt-[50px] text-[48px] leading-[60px] text-[#270A26] -tracking-[0.02em] mb-[16px]">
//                 Spend here, there, everywhere
//               </h3>
//               <p className="font-[400] text-[18px] leading-[28px] text-[#5D395D]">
//                 No more payment worries when you travel. BMONI gives you VIP
//                 spending power with multi-currency wallets and global-ready
//                 cards — virtual or physical — that power local spending for
//                 flights, hotels, and withdrawals, online or in-person, at home
//                 or abroad, wherever your passport takes you.
//               </p>

//               <p className="font-[500] text-[16px] mt-[40px] leading-[28px] text-[#5D395D]">
//                 You&apos;re truly borderless
//               </p>
//             </div>
//             <div className="w-full mt-[20px] xl:mt-0">
//               <div
//                 className="w-full relative h-[550px] rounded-[15px]"
//                 style={{
//                   backgroundImage: "url(/img/use-cases/travel-girl.png)",
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center top",
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Panel 2 */}
//         <div className="panel w-full h-inherit xl:h-screen lg:flex items-center justify-center bg-[#FFF7FF] px-[12px] xl:px-[32px] mt-[20px] xl:mt-0">
//           <div className="w-full rounded-[16px] bg-[#E6F4F7] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
//             
//           </div>
//         </div>

//         {/* Panel 3 (3-column layout) */}
//         <div className="panel w-full h-inherit xl:h-screen lg:flex items-center justify-center bg-[#FFF7FF] px-[12px] xl:px-[32px] mt-[20px] xl:mt-0">
//           <div className="w-full rounded-[16px] bg-[#F7E6E6] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
            
//           </div>
//         </div>

//         {/* Panel 4 */}
//         <div className="panel w-full h-inherit xl:h-screen bg-[#FFF7FF] px-[12px] mt-[20px] xl:mt-0 xl:px-[32px]">
//           <div className="w-full rounded-[16px] bg-[#F7EFE6] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
            
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UseCases;

"use client";
import React from "react";
import Image from "next/image";

const UseCases: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FFF7FF] mt-[50px] xl:mt-0">
      {/* Sticky Title */}
      <div
        className="relative xl:sticky bg-[#FFF7FF] top-0 z-30 py-[20px] xl:py-[50px]"
        style={{
          backgroundImage: "url(/img/use-cases/use-cases-pattern-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <h2 className="text-[32px] xl:text-[48px] leading-[32px] xl:leading-[60px] -tracking-[0.02em] text-[#270A26] font-[500] text-center font-fraunces">
          Use Cases
        </h2>
      </div>

      {/* Panels wrapper */}
      <div className="relative w-full min-h-[500vh]">
        {/* Panel 1 */}
        <div className="xl:sticky top-[80px] z-10 h-inherit xl:h-screen flex items-center justify-center p-[12px] xl:px-[32px]">
          <div className="w-full rounded-[16px] bg-[#F7E6F7] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
            <div className="w-full">
              <span className="w-max px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-[#AF01AF] bg-gradient-to-b from-[#d85cc51a] to-[#ff3fec1a]">
                <Image src="/img/icons/luggage-02.svg" width={24} height={24} alt="" />
                BMONI for Nomads
              </span>
              <h3 className="font-fraunces mt-[50px] text-[48px] leading-[60px] text-[#270A26] -tracking-[0.02em] mb-[16px]">
                Spend here, there, everywhere
              </h3>
              <p className="font-[400] text-[18px] leading-[28px] text-[#5D395D]">
                No more payment worries when you travel. BMONI gives you VIP spending power with
                multi-currency wallets and global-ready cards…
              </p>
            </div>
            <div className="w-full mt-[20px] xl:mt-0">
              <div
                className="w-full relative h-[550px] rounded-[15px]"
                style={{
                  backgroundImage: "url(/img/use-cases/travel-girl.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="xl:sticky top-[80px] z-20 h-inherit xl:h-screen flex items-center justify-center p-[12px] xl:px-[32px]">
          <div className="w-full rounded-[16px] bg-[#E6F4F7] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
            <div className="w-full">
                 <span className='w-max px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-[#0195AF] bg-gradient-to-b from-[#5ccad82f] to-[#3fe5ff29]'>
                  <Image src='/img/icons/coins-hand.svg' width={24} height={24} alt=''  />
                   BMONI for Trade
                 </span>

               <h3 className="font-fraunces mt-[50px] text-[48px] leading-[60px] text-[#270A26] -tracking-[0.02em] mb-[16px]">
                Power your hustle
               </h3>
               <p className="font-[400] text-[18px] leading-[28px] text-[#5D395D]">
                 BMONI gives you access to global banking rails that let you
                 receive payments from anywhere and settle suppliers in foreign
                 currencies with ease. Lock in the value of your hard-earned
                 profit by converting it instantly into USD, so you can restock
                 and reinvest without losses.
               </p>

               <p className="font-[500] text-[16px] mt-[40px] leading-[28px] text-[#0195AF]">
                 Borderless money for truly borderless businesses
               </p>
             </div>
             <div className="w-full mt-[20px] xl:mt-0">
               <div
                 className="w-full relative h-[550px] rounded-[15px]"
                 style={{
                   backgroundImage: "url(/img/use-cases/working-man.png)",
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
                   backgroundPosition: "center top",
                 }}
               />
             </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="xl:sticky top-[80px] z-30 h-inherit xl:h-screen flex items-center justify-center p-[12px] xl:px-[32px]">
          <div className="w-full rounded-[16px] bg-[#F7E6E6] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
            {/* ... */}
            <div className="w-full">
              <div
                className="w-full relative h-[550px] rounded-[15px] scale-x-[-1]"
                style={{
                  backgroundImage: "url(/img/use-cases/phone-guy.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                }}
              />
            </div>

            <div className="w-full text-left xl:text-center mt-[20px] xl:mt-0">
                <span className='w-max px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-[#AF0104] bg-gradient-to-b from-[#d85c5e1f] to-[#ff3f4229]'>
                  <Image src='/img/icons/globe-05.svg' width={24} height={24} alt=''  />
                  BMONI for Cross-border Payments
                </span>
              <h3 className="font-fraunces mt-[50px] text-[48px] leading-[60px] text-[#270A26] -tracking-[0.02em] mb-[16px]">
                Sending money is your love language
              </h3>
              <p className="font-[400] text-[18px] leading-[28px] text-[#5D395D]">
                Whether you&apos;re sending money to family, funding a business
                abroad, or bridging long-distance love, BMONI allows you to move
                your money effortlessly with seamless cross-border payments at
                fair exchange rates, so more of your money gets to the people
                who matter.
              </p>

              <p className="font-[500] text-[16px] mt-[40px] leading-[28px] text-[#AF0104]">
                We&apos;re here to help you do it better.
              </p>
            </div>
            <div className="w-full mt-[20px] xl:mt-0">
              <div
                className="w-full relative h-[550px] rounded-[15px]"
                style={{
                  backgroundImage: "url(/img/use-cases/phone-girl-2.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>

        {/* Panel 4 */}
        <div className="xl:sticky top-[80px] z-40 h-inherit xl:h-screen flex items-center justify-center p-[12px] xl:px-[32px]">
          <div className="w-full rounded-[16px] bg-[#F7EFE6] p-[20px] xl:p-[65px] lg:flex items-center justify-between gap-x-[160px]">
            {/* ... */}
            <div className="w-full">
              {/* <div className='rounded-full border-2 border-[#ED8F0B] w-max mb-[50px]'> */}
              <span className='w-max px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-[#AF6101] bg-gradient-to-b from-[#d8a25c29] to-[#ffac3f25]'>
                  <Image src='/img/icons/laptop-02.svg' width={24} height={24} alt=''  />
                  BMONI for Freelancers
              </span>
                {/* </div> */}
              <h3 className="font-fraunces text-[48px] mt-[50px] leading-[60px] text-[#270A26] -tracking-[0.02em] mb-[16px]">
                Get paid like a pro
              </h3>
              <p className="font-[400] text-[18px] leading-[28px] text-[#5D395D]">
                Whether you&apos;re designing in Lagos or coding for a client in
                London, BMONI gives you dedicated NGN, USD, GBP, and EUR local
                virtual accounts to receive payments globally, so your payments
                always find you, no matter where they&apos;re coming from. You
                focus on the work. We&apos;ll handle the rest.
              </p>

              <p className="font-[500] text-[16px] mt-[40px] leading-[28px] text-[#AF6101]">
                You&apos;ve earned every dollar. Why lose it to fees or delays?
              </p>
            </div>
            <div className="w-full mt-[20px] xl:mt-0">
              <div
                className="w-full relative h-[550px] rounded-[15px]"
                style={{
                  backgroundImage: "url(/img/use-cases/nomad-girl.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
