'use client'
import React, { useState } from 'react'
import ChevronIcon from '../elements/lcons/ChevronIcon';

const Faq = () => {
    const [activeQa, setActiveQa] = useState(0);
    const qas = [
        {
            question: 'What is BMONI?',
            answer: 'BMONI is a smart digital wallet built with stablecoin and AI technology that helps you earn interest, get cashback, and save in USD, all from one secure app.'
        },
        {
            question: 'How do I open a BMONI account?',
            answer: "Download the app, sign up in minutes, and you're good to go."
        },
        {
            question: 'Is my money safe?',
            answer: 'Your money is held with licensed, regulated banking partners in Nigeria and the U.S, and encrypted end-to-end. With 21 awarded patents and stablecoin infrastructure powering the system, every transaction is secure, fast, and trackable. You can withdraw anytime, no lock-ins, and we stay fully transparent with all compliance.'
        },
        {
            question: 'How does the BMONI cashback work?',
            answer: 'Link your card and spend like usual. We give you 1% cashback on every transaction, paid quarterly.'
        },
        {
            question: 'What if I need help?',
            answer: 'Our AI support is available 24/7 in-app. You can also reach out through the Help Centre or live chat.'
        },
    ]
    return (
        <section className='w-full p-[20px] xl:px-[32px] xl:pt-[32px] pb-[150px] bg-[#270A26] relative'>
            <div className='w-full rounded-[16px] z-50 px-[25px] xl:px-[56px] py-[20px] xl:py-[64px] bg-[#F7E6F7] xl:flex items-start justify-between gap-x-[64px]'>
                <div className='w-full'>
                    <h1 className='text-[48px] leading-[56px] text-[#270A26] -tracking-[0.02em] font-[500] font-playfair-display'>Frequently Asked <br />Questions</h1>
                </div>
                <div className='w-full'>
                    {qas.map((qa, qaIndex) => (
                        <div key={qaIndex} className='w-full border-b border-[#D8B4D7]'>
                            <div onClick={()=>{setActiveQa(qaIndex)}} className='cursor-pointer w-full flex items-center justify-between py-[24px]'>
                                <h3 className='font-playfair-display font-[500] text-[24px] leading-[32px] text-[#270A26]'>{qa.question}</h3>
                                <button>
                                    <ChevronIcon className={`text-black w-[16px] h-[16px] transition duration-200 ${activeQa === qaIndex ? '-rotate-90' : 'rotate-90'}`} />
                                </button>
                            </div>
                            {qaIndex === activeQa && <div className='w-[95%] transition duration-200 mb-[24px]'>
                                <p className='text-[#370E36] text-[18px] leading-[26px]'>{qa.answer}</p>
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className='w-full h-screen absolute top-0 left-0 z-10' style={{
                backgroundImage: "url(/img/faq-bg-pattern.svg)",
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
            }} /> */}
            
        </section>
    )
}

export default Faq