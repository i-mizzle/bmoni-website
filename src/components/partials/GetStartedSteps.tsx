import React from 'react'

const GetStartedSteps = () => {
  return (
     <section className="relative w-full bg-[#270A26] h-inherit px-[40px] xl:px-[100px] pb-[100px]">
        {/* <div className="hidden xl:block xl:sticky top-0 z-20 py-[50px] w-[30%] mx-[35%] h-[100vh]">
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

        <div className='w-full h-inherit xl:h-[100vh] -mt-[100vh]'>
            <div className='w-full xl:w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>Get started with BMONI</p>
                <h1 className='-tracking-[0.02em] font-fraunces text-white font-[500] text-[48px] leading-[56px]'>With 3 easy steps</h1>
            </div>
        </div>
        <div className='w-full flex flex-row-reverse h-inherit xl:h-[100vh] text-white'>
            <div className='w-full xl:w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>STEP 1</p>
                <h1 className='-tracking-[0.02em] font-fraunces text-white font-[500] text-[48px] leading-[56px]'>Download the BMONI app</h1>
            </div>
        </div>
        <div className='w-full h-inherit xl:h-[100vh] text-white'>
            <div className='w-full xl:w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>STEP 2</p>
                <h1 className='-tracking-[0.02em] font-fraunces text-white font-[500] text-[48px] leading-[56px]'>Complete KYC procedures and make your first deposit</h1>
            </div>
        </div>
        <div className='w-full flex flex-row-reverse h-inherit xl:h-[100vh] text-white'>
            <div className='w-full xl:w-[30%] pt-[150px]'>
                <p className='mb-[16px] text-[#FF49E7] font-[500] text-[24px] leading-[32px]'>STEP 3</p>
                <h1 className='-tracking-[0.02em] font-fraunces text-white font-[500] text-[48px] leading-[56px]'>Start enjoying zero boundaries with your money.</h1>
            </div>
        </div> */}

        <div className="w-[80%] xl:w-[40%] mx-auto text-center pt-[80px]">
          <h3 className="text-[32px] xl:text-[48px] leading-[60px] font-fraunces text-[#fff] -tracking-[0.02em]">Start your BMONI journey in 3 simple steps</h3>
        </div>

        <div className='grid grid-cols-1 gap-[16px] lg:grid-cols-3'>
            <div className='w-full'>
                <div className="w-full relative h-[350px] rounded-[16px] mt-[140px]" 
                    style={{
                        backgroundImage: "url(/img/steps/step-1.svg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }} 
                />

                <div className="p-[32px] mt-[40px] text-center">
                    <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Download BMONI</h3>
                    <p className="leading-[24px] font-[400] text-[#F7E6F7]">Get the app and join in minutes.</p>
                </div>
            </div>
            <div className='w-full'>
                <div className="w-full relative h-[350px] rounded-[16px] mt-[140px]" 
                    style={{
                        backgroundImage: "url(/img/steps/step-2.svg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }} 
                />

                <div className="p-[32px] mt-[40px] text-center">
                    <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Verify and Fund</h3>
                    <p className="leading-[24px] font-[400] text-[#F7E6F7]">Complete KYC and make your first deposit.</p>
                </div>
            </div>
            <div className='w-full'>
                <div className="w-full relative h-[350px] rounded-[16px] mt-[140px]" 
                    style={{
                        backgroundImage: "url(/img/steps/step-3.svg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                    }} 
                />

                <div className="p-[32px] mt-[40px] text-center">
                    <h3 className="text-[30px] leading-[38px] font-fraunces font-[500] -leading-[0.2em] text-[#ffffff] mb-[12px]">Go Borderless</h3>
                    <p className="leading-[24px] font-[400] text-[#F7E6F7]">Send, spend and save without limits.</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default GetStartedSteps