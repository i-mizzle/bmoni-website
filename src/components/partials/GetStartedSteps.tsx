import Image from 'next/image'
import React from 'react'

const GetStartedSteps = () => {
  return (
     <section className="relative w-full bg-[#270A26] h-[400vh] px-[100px]">
        {/* Sticky Title */}
        <div className="sticky top-0 z-20 py-[50px] w-[30%] mx-[35%] h-[100vh]">
            <div className='relative w-full'>

                <div className='w-full h-screen absolute top-[100px] left-0' style={{
                    backgroundImage: "url(/img/get-started-bg.svg)",
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "cover",
                    maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "cover",
                }} />
                    
                <div className='w-full relative h-[570px]'>
                    <Image 
                        alt='mockup' 
                        src={`/img/hero-phone-mockup.png`} 
                        fill 
                        className='object-contain'/>
                </div>


            </div>
        </div>

        <div className='w-full h-[100vh] -mt-[100vh]'>
            <div className='w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>Get started with BMONI</p>
                <h1 className='-tracking-[0.02em] font-playfair-display text-white font-[500] text-[48px] leading-[56px]'>With 3 easy steps</h1>
            </div>
        </div>
        <div className='w-full flex flex-row-reverse h-[100vh] text-white'>
            <div className='w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>STEP 1</p>
                <h1 className='-tracking-[0.02em] font-playfair-display text-white font-[500] text-[48px] leading-[56px]'>Download the BMONI app</h1>
            </div>
        </div>
        <div className='w-full h-[100vh] text-white'>
            <div className='w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>STEP 2</p>
                <h1 className='-tracking-[0.02em] font-playfair-display text-white font-[500] text-[48px] leading-[56px]'>Complete KYC procedures and make your first deposit</h1>
            </div>
        </div>
        <div className='w-full flex flex-row-reverse h-[100vh] text-white'>
            <div className='w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>STEP 3</p>
                <h1 className='-tracking-[0.02em] font-playfair-display text-white font-[500] text-[48px] leading-[56px]'>Start enjoying zero boundaries with your money.</h1>
            </div>
        </div>
      </section>
  )
}

export default GetStartedSteps