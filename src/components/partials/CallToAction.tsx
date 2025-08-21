import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (
    <>
        <section className=' w-full px-[80px] bg-[#F7E6F7] pt-[175px]'>
            <div className='w-full flex items-center justify-between gap-x-[64px]'>
                <div className='w-full'>
                    <h3 className='font-playfair-display font-[500] text-[48px] leading-[60px] -tracking-[0.02em] text-[#320032]'>Ready to actually take your <br />money moves global?</h3>

                    <p className='text-[#5D395D] text-[20px] leading-[30px] mt-[24px]'>Get started with BMONI today</p>

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
                    <div className='w-[90%] mx-auto relative h-[400px]'>
                        <Image 
                            alt='mockup' 
                            src={`/img/cta-phone.png`} 
                            fill 
                            className='object-contain'/>
                    </div>
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