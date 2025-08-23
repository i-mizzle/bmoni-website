import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (
    <>
        <section className='w-full px-[40px] xl:px-[80px] min-h-[80vh] h-inherit pt-[175px]' style={{
                backgroundImage: "url(/img/cta-bg.png)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}>
            <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-x-[64px]'>
                <div className='w-full'>
                    <h3 className='font-fraunces font-[500] text-[32px] leading-[40px] xl:text-[48px] xl:leading-[60px] -tracking-[0.02em] text-[#fff]'>Ready to actually take your <br className='hidden xl:block' />money moves global?</h3>

                    <p className='text-[#F7E6F7] text-[20px] leading-[30px] mt-[24px]'>Get started with BMONI today</p>

                    <div className='flex items-center gap-x-[12px] mt-[50px]'>
                        <button className='relative w-[140px] h-[44px] cursor-pointer'>
                        <Image 
                            alt='mockup' 
                            src={`/img/app-store-badge.svg`} 
                            fill 
                            className='object-contain'/>
                        </button>
                        <button className='relative w-[140px] h-[44px] cursor-pointer'>
                        <Image 
                            alt='mockup' 
                            src={`/img/play-store-badge.svg`} 
                            fill 
                            className='object-contain'/>
                        </button>
                    </div>
                </div>
                <div className='w-full flex items-end'>
                    {/* <div className='w-full xl:w-[90%] -mb-[100px] xl:mb-0 mx-auto relative h-[400px]'>
                        <Image 
                            alt='mockup' 
                            src={`/img/cta-phone.png`} 
                            fill 
                            className='object-contain'/>
                    </div> */}
                </div>
            </div>
        </section>
        <div className='bg-[#FF3FEC] w-full h-[70px] relative'>
            <div className='absolute top-0 left-0 w-full h-[70px]' style={{
                backgroundImage: "url(/img/pattern-strip.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }} />
        </div>
    </>
  )
}

export default CallToAction