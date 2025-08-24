'use client'
import React, { useState } from 'react'
import ChevronIcon from '../elements/lcons/ChevronIcon';
import ArrowIcon from '../elements/lcons/ArrowIcon';

const Faq = () => {
    const [activeQa, setActiveQa] = useState(0);
    const qas = [
        {
            question: 'What is BMONI and how does it work?',
            answer: "BMONI is a digital wallet that lets you send, receive, and manage money across currencies - all from one app. It's built to be fast, secure, and borderless, making everyday transactions simple, whether local or global."
        },
        {
            question: 'What currencies are supported?',
            answer: "Right now, BMONI supports wallets in Nigerian Naira (NGN) and US Dollars (USD)."
        },
        {
            question: 'How do I top up my wallet?',
            answer: 'You can add money to your BMONI wallet through bank transfers. Just head to the Wallet tab, tap “Top Up”, and follow the steps to get started.'
        },
        {
            question: 'How do I log in?',
            answer: "With BMONI, there's no need to remember PINs or passwords. We use biometric authentication - fast, seamless, and secure. Our technology is backed by 22 patents in biometric security, so every time you log in, you're protected by one of the world's most advanced systems."
        },
        {
            question: 'Is my account tied to my phone?',
            answer: "Each user can only have one BMONI account, and it's securely linked to your phone number and device. If you ever change your phone or number, just tap “Recover your account” on the login page to regain access."
        },
        {
            question: 'How do I contact support?',
            answer: "You can reach our team anytime through the in-app chat or by emailing us at support@bmoni.com. We're here to help."
        },
    ]
    return (
        <section className='w-full p-[20px] xl:px-[32px] xl:pt-[150px] pb-[150px] bg-[#270A26] relative'>
            <div className='w-full hidden xl:block h-[150vh] absolute -top-[10px] left-0 z-10' style={{
                backgroundImage: "url(/img/faq-bg-pattern.png)",
                backgroundSize: '80%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
            }} />
            <div className='w-full hidden xl:block h-[50vh] absolute bottom-[20px] left-0 z-10' style={{
                backgroundImage: "url(/img/faq-bg-pattern.png)",
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                transform: "scaleY(-1)"
            }} />

            <div className='w-full rounded-[16px] z-50 relative px-[25px] xl:px-[56px] py-[20px] xl:py-[64px] bg-[#F7E6F7] xl:flex items-start justify-between gap-x-[64px]'>
                <div className='w-full xl:w-[40%]'>
                    <h1 className='text-[48px] leading-[56px] text-[#270A26] -tracking-[0.02em] font-[500] font-fraunces'>Frequently Asked <br />Questions</h1>
                </div>
                <div className='w-full xl:w-[60%]'>
                    {qas.map((qa, qaIndex) => (
                        <div key={qaIndex} className='w-full border-b border-[#D8B4D7]'>
                            <div onClick={()=>{setActiveQa(qaIndex)}} className='cursor-pointer w-full flex items-center justify-between py-[24px]'>
                                <h3 className='font-fraunces font-[500] text-[24px] leading-[32px] text-[#270A26]'>{qa.question}</h3>
                                <button>
                                    <ChevronIcon className={`text-black w-[16px] h-[16px] transition duration-200 ${activeQa === qaIndex ? '-rotate-90' : 'rotate-90'}`} />
                                </button>
                            </div>
                            {qaIndex === activeQa && <div className='w-[95%] transition duration-200 mb-[24px]'>
                                <p className='text-[#370E36] text-[18px] leading-[26px]'>{qa.answer}</p>
                            </div>}
                        </div>
                    ))}

                    <button className='px-[22px] py-[12px] rounded-full mt-[24px] text-[#AF01AF] bg-gradient-to-b uppercase flex items-center justify-center gap-x-[8px] font-[600] leading-[24px] cursor-pointer from-[#d85cc52e] to-[#ff3fec2d]'>
                        Speak to our AI chatbot
                        <ArrowIcon className='w-[24px] h-[24px] rotate-[180deg]' />
                    </button>
                </div>
            </div>

            
            
        </section>
    )
}

export default Faq