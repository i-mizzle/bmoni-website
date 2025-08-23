"use client"
import React, { useEffect, useState } from 'react'
import DownloadButton from '../elements/DownloadButton'
// import PartnersScroll from './PartnersScroll'
import RotatingText from '../elements/RotatingText'
import Image from 'next/image'
import ImageScroll from './ImageScroll'

const LandingHero = () => {
    const partners = [
        '/img/partners/busha.svg',
        '/img/partners/allawee.svg',
        '/img/partners/quidax.svg',
        '/img/partners/bridge.svg',
        '/img/partners/aluko-oyebode.svg',
    ];

    const [gifLoaded, setGifLoaded] = useState(false);

    useEffect(() => {
        const img = new window.Image();
        img.src = "/img/hero-animation.gif"; // preload GIF
        img.onload = () => setGifLoaded(true);
    }, []);
    
    return (
        <>
            <section className='w-full min-h-screen h-inherit bg-[#270A26] px-[16px] xl:p-[32px] relative overflow-y-hidden'>
                <div className='bg-[#370E36] relative rounded-[16px] mt-[20px] xl:mt-0 pt-[100px] xl:pt-0'>
                    <div className='w-full min-h-screen h-inherit relative lg:flex items-center justify-between z-20 pt-[40px] px-[20px] lg:px-[40px] xl:px-[100px] mb-[50px]'>
                        <div className='w-full xl:w-1/2 mx-auto relative'>
                            <div className='w-full xl:w-2/3'>
                                <h1 className="font-fraunces font-[700] text-white text-[48px] xl:text-[60px] leading-[60px] xl:leading-[72px] animate__animated animate__fadeInDown">
                                    Your money,<br /> but <RotatingText />
                                </h1>
                                <p className='text-[#F7E6F7] text-[18px] leading-[28px] mt-[24px]  animate__animated animate__fadeInDown'>Powered by stablecoin and AI technology to help you earn, spend, save, and grow, all without banking limitations getting in your way.</p>

                                <div className='w-max mt-[48px]'>
                                    <DownloadButton />
                                </div>

                                <div className='w-full mt-[60px]  animate__animated animate__fadeInUp'>
                                    <p className='leading-[24px] text-[#EFCCEF] -tracking[0.02em] mb-[16px]'>Backed by trusted partners</p>
                                    {/* <PartnersScroll /> */}
                                    <div className={`flex items-center gap-x-[20px]`}>
                                        {partners.map((logo, index) => (
                                        <div key={index} className={`w-[100px] h-[40px] flex items-center relative`}>
                                            <Image 
                                                src={logo} 
                                                alt={`Logo ${index % partners.length + 1}`} 
                                                fill 
                                                className='object-contain' />
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full xl:w-1/2'>
                            <div className='w-full h-[400px] xl:h-[800px] relative animate__animated animate__fadeInUp'>

                                {gifLoaded ? (
                                    <Image
                                        alt="hero illustration animated"
                                        src="/img/hero-animation.gif"
                                        className="object-contain"
                                        fill
                                    />
                                ) : <Image alt='' src={`/img/hero-graphic.svg`} className='object-contain' fill />}
                            </div>
                        </div>
                    </div>

                    <div className='hidden xl:block absolute w-full h-[60vh] bottom-0 left-0 z-0 bg-opacity-10' style={{
                        backgroundImage: "url(/img/hero-pattern-bg.svg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center top'
                    }}>
                        <div className='bg-gradient-to-b mt-[50px] h-[500px] from-[#370E36] to-[#370E3605]' />
                    </div>
                </div>

                <div className=' w-full relative bg-transparent -mt-[50px] pb-[50px]'>
                    <span className='hidden xl:block hero-ellipse left-[20px] rounded-full -top-[280px] opacity-50 w-[455px] h-[455px]' />
                    <span className='hidden xl:block hero-ellipse left-[455px] rounded-full opacity-30 -top-[50px] w-[280px] h-[280px]' />
                    <span className='hidden xl:block hero-ellipse right-[455px] rounded-full opacity-30 -top-[50px] w-[280px] h-[280px]' />
                    <span className='hidden xl:block hero-ellipse right-[25px] rounded-full opacity-50 -top-[280px] w-[455px] h-[455px]' />
                    
                    <div className='mx-auto w-full min-h-screen h-inherit relative animate__animated animate__fadeInUp '>
                        {/* <Image src={`/img/hero-phone-mockup.png`} fill className={`object-contain xl:ml-[20px]`} alt='' />
                        <div className='absolute -bottom-[75px] -left-[120px]'>
                            <Image src={`/img/hero-card-mockup.png`} width={350} height={150} className={``} alt='' />
                        </div> */}
                        <div className='w-full relative'>
                            <div className='hidden lg:inline-block absolute top-0 left-[20px]'>
                                <Image alt='' src={`/img/green-card-hand.svg`} width={225} height={195}/>
                            </div>
                            <div className='hidden lg:inline-block absolute top-0 right-[20px]'>
                                <Image alt='' src={`/img/pink-card-hand.svg`} width={225} height={195}/>
                            </div>
                        </div>

                        <div className='relative w-[90%] xl:w-1/2 mx-auto pt-[200px]'>
                            <div className='absolute top-[420px] -left-[100px]'>
                                <Image alt='' src={`/img/coin.svg`} width={56} height={52} className='float-bounce'/>
                            </div>
                            <div className='absolute top-[620px] -left-[150px]'>
                                <Image alt='' src={`/img/coin.svg`} width={67} height={62} className='float-bounce'/>
                            </div>
                            <span className='border-2 rounded-full border-[#ED0BBC] px-[22px] py-[12px] text-[#C94CD7] leading-[24px] font-inter mb-[24px] inline-block'>WHY BMONI</span>
                            <p className='font-fraunces text-white text-[24px] xl:text-[42px] leading-[32px] xl:leading-[64px] mb-[32px]'>You live, work, and shop across borders. But your bank hasn&apos;t kept up.</p>
                            <p className='font-fraunces text-white text-[24px] xl:text-[42px] leading-[28px] xl:leading-[64px]'>That&apos;s why we built BMONI.Your money should move like you do.</p>

                            <p className='mt-[72px] text-[42px] xl:text-[64px] leading-[60px] uppercase font-[700] tracking-[0.2em] font-fraunces text-[#BF34BF]'>BORDERLESS</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full h-[360px] flex items-center bg-[#270A26]' style={{
                backgroundImage: "url(/img/scroller-bg-pattern.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
            }}>
                <ImageScroll />
                {/* <div></div> */}
            </div>
        </>
    )
}

export default LandingHero