import React from 'react'

const GetStartedSteps = () => {
  return (
     <section className="relative w-full bg-[#270A26] h-inherit px-[40px] xl:px-[100px] pb-[40px]">
        <div className="w-[80%] xl:w-[50%] 2xl:w-[40%] mx-auto text-center pt-[80px]">
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