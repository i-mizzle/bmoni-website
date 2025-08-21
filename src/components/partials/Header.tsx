import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ChevronIcon from '../elements/lcons/ChevronIcon'
import DownloadButton from '../elements/DownloadButton'
// import {BmoniLogo} from ''

const Header = () => {
  return (
    <header className='flex items-start xl:items-center justify-between px-[40px] xl:px-[64px] py-[44px] mt-[32px] bg-transparent absolute top-0 left-0 w-full z-50'>
        <div className='xl:flex items-center gap-x-[20px] xl:gap-x-[80px] w-1/2'>
            <Link href={`/`}>
                <Image src={`/img/bmoni-logo.svg`} width={110} height={24} alt='' />
            </Link>

            <div className='flex items-center gap-x-[24px] mt-[20px] xl:mt-0'>
                <button className='flex gap-x-[6px] items-center justify-center text-[#F7E6F7] leading-[24px]'>
                    Products <ChevronIcon className='w-[16px] h-[16px] text-[#C74DC7] rotate-90' />
                </button>
                <button className='flex items-center justify-center text-[#F7E6F7] leading-[24px]'>
                    Resources
                </button>
                <button className='flex items-center justify-center text-[#F7E6F7] leading-[24px]'>
                    Help
                </button>
            </div>
        </div>
        <div className='flex flex-row-reverse items-center gap-x-[20px] w-full xl:w-1/2'>
            <span className='hidden xl:inline-block'>
            <DownloadButton />
            </span>
            <button className='flex items-center justify-center rounded-full gap-x-[7px] text-white font-[500] leading-[24px] -mt-[20px] xl:mt-0 bg-[#B601B626] px-[22px] py-[16px]'>
                <span className='flex items-center justify-center gap-x-[4px]'>
                    <Image src={`/img/GH.svg`} width={24} height={24} alt='' />
                    GH
                </span>
                <ChevronIcon className='w-[16px] h-[16px] text-[#C74DC7] rotate-90' />
            </button>
        </div>
    </header>
  )
}

export default Header