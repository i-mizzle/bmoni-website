import React from 'react'
import DownloadButton from '../elements/DownloadButton'
import PartnersScroll from './PartnersScroll'
import RotatingText from '../elements/RotatingText'
import Image from 'next/image'
import TextRevealSection from './TextRevealSection'
import ParallaxImage from '../elements/ParallaxImage'

const LandingHero = () => {
  return (
    <section className='w-full min-h-screen h-inherit bg-[#270A26] p-[32px] relative overflow-y-hidden'>
        <div className='bg-[#370E36] relative rounded-[16px]'>
            <div className='w-full h-screen relative z-20 pt-[170px] mb-[50px]'>
                <div className='w-[90%] xl:w-1/3 mx-auto text-center relative'>
                    <h1 className="font-playfair-display font-[700] text-white text-[48px] xl:text-[60px] leading-[60px] xl:leading-[72px] animate__animated animate__fadeInDown">
                        Your money,<br /> but <RotatingText />
                    </h1>
                    <p className='text-[#F7E6F7] text-[18px] leading-[28px] mt-[16px]  animate__animated animate__fadeInDown'>Powered by stablecoin and AI technology to help you earn, spend, save, and grow, all without banking limitations getting in your way.</p>

                    <div className='w-max mx-auto mt-[32px]'>
                        <DownloadButton />
                    </div>

                    <div className='w-full mt-[50px]  animate__animated animate__fadeInUp'>
                        <PartnersScroll />
                    </div>
                </div>
            </div>

            <div className='hidden xl:block absolute w-full h-[60vh] -bottom-[10px] left-0 z-0 bg-opacity-10' style={{
                backgroundImage: "url(/img/hero-pattern-bg.svg)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
            }}>
                <div className='bg-gradient-to-b mt-[50px] h-[500px] from-[#370E36] to-[#370E3605]' />
            </div>
        </div>

        <div className=' w-full relative bg-transparent mt-[50px] xl:-mt-[250px] pb-[50px]'>
            <span className='hidden xl:block hero-ellipse left-[20px] rounded-full -top-[80px] opacity-50 w-[455px] h-[455px]' />
            <span className='hidden xl:block hero-ellipse left-[455px] rounded-full opacity-30 top-[20px] w-[280px] h-[280px]' />
            <span className='hidden xl:block hero-ellipse right-[455px] rounded-full opacity-30 top-[20px] w-[280px] h-[280px]' />
            <span className='hidden xl:block hero-ellipse right-[25px] rounded-full opacity-50 -top-[80px] w-[455px] h-[455px]' />
            <div className='mx-auto w-[450px] h-[550px] relative animate__animated animate__fadeInUp '>
                <Image src={`/img/hero-phone-mockup.png`} fill className={`object-contain xl:ml-[20px]`} alt='' />
                <div className='absolute -bottom-[75px] -left-[120px]'>
                    <Image src={`/img/hero-card-mockup.png`} width={350} height={150} className={``} alt='' />
                </div>
            </div>
        </div>
        <div className='w-full relative bg-[#270A26] min-h-screen pt-[100px] pb-[200px]'>
            <div className='w-full xl:w-[35%] mx-auto z-50'>
                <TextRevealSection />
            </div>

            <ParallaxImage
                className="hidden xl:block absolute w-[220px] h-[260px] left-[180px] bottom-[850px] rounded-[8px]"
                backgroundImage="/img/pos-man.png"
                speed={0.2}
            />

            <ParallaxImage
                className="hidden xl:block absolute w-[220px] h-[260px] left-[40px] bottom-[300px]"
                backgroundImage="/img/phone-woman.png"
                speed={0.25}
            />

            <ParallaxImage
                className="hidden xl:block absolute w-[330px] h-[260px] right-[200px] bottom-[160px] rounded-[8px] z-10"
                backgroundImage="/img/passport-girl.png"
                speed={0.05}
            />

            <ParallaxImage
                className="hidden xl:block absolute w-[210px] h-[200px] right-[100px] bottom-[650px] rounded-[8px] z-10"
                backgroundImage="/img/laptop-girl.png"
                speed={0.3}
            />
        </div>
    </section>
  )
}

export default LandingHero