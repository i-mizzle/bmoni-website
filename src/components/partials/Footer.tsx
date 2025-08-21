import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DownloadButton from '../elements/DownloadButton'
import ChevronIcon from '../elements/lcons/ChevronIcon'

const Footer = () => {
  return (
    <footer className='w-full px-[20px] xl:px-[64px] pt-[50px] xl:pt-[195px] bg-[#270A26]'>
      <div className='w-full lg:flex items-start justify-between gap-x-[48px]'>
        <div className='w-full xl:w-1/2'>
          <div className='w-full xl:w-1/2'>
            <Link href={`/`} className=''>
              <Image src={`/img/bmoni-logo.svg`} width={110} height={24} alt='' />
            </Link>

            <p className='text-[14px] leading-[20px] text-[#F7E6F7] mb-[48px] mt-[32px]'>Powered by stablecoin and AI technology to help you earn, spend, save, and grow, all without banking limitations getting in your way.</p>

            <DownloadButton />
          </div>
        </div>
        <div className='w-full mt-[20px] lg:w-1/2 xl:mt-0 xl:flex items-start gap-x-[48px] justify-between'>
          <div className='lg:text-right w-full'>
            <p className='text-xs leading-[16px] text-[#DCA4DC] mb-[12px]'>PRODUCTS</p>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Cards
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Interest
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Cashback
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              USD Savings
            </Link>
          </div>

          <div className='mt-[20px] lg:mt-0 lg:text-right w-full'>
            <p className='text-xs leading-[16px] text-[#DCA4DC] mb-[12px]'>USE CASES</p>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              BMONI for Salary Earners
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              BMONI for Trade
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              BMONI for Cross-border payments
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              BMONI for Freelancers
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              BMONI for Nomads
            </Link>
          </div>

          <div className='mt-[20px] lg:text-right w-full'>
            <p className='text-xs leading-[16px] text-[#DCA4DC] mb-[12px]'>COMPANY</p>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              About Us
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Press
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Privacy Policy
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Legal
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Security
            </Link>
            <Link href={``} className='block mb-[14px] leading-[24px] text-[#F7E6F7]'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full pt-[200px] pb-[50px]' style={{
        backgroundImage: "url(/img/footer-bg.png)",
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
      }}>
        <div className='w-full xl:flex items-center justify-between'>
          <div className='w-full'>
            <button className='flex items-center justify-center rounded-full gap-x-[7px] text-white font-[500] leading-[24px] bg-[#B601B626] px-[22px] py-[16px]'>
              <span className='flex items-center justify-center gap-x-[4px]'>
                <Image src={`/img/GH.svg`} width={24} height={24} alt='' />
                GH
              </span>
              <ChevronIcon className='w-[16px] h-[16px] text-[#C74DC7] rotate-90' />
            </button>
          </div>

          <div className='w-full flex items-center justify-center gap-x-[48px]'>
            <p className='text-[#DCA4DC] leading-[24px]'><a href='mailto:contact@bkey.com'>contact@bkey.com</a> | <a href="tel:+2341234567890">+234 123 456 7890</a></p>
            <div className='flex flex-row-reverse items-center justify-between gap-x-[24px]'>
              <Link href={``} target='_blank'>
                <Image src={`/img/icons/social-facebook.svg`} width={24} height={24} alt='' />
              </Link>
              <Link href={``} target='_blank'>
                <Image src={`/img/icons/social-linkedin.svg`} width={24} height={24} alt='' />
              </Link>
              <Link href={``} target='_blank'>
                <Image src={`/img/icons/social-x.svg`} width={24} height={24} alt='' />
              </Link>
            </div>
          </div>

          <div className='w-full text-right'>
            <p className='text-[#DCA4DC] leading-[24px]'>© BMONI 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer