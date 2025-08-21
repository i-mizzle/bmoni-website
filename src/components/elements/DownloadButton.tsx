import React from 'react'
import ArrowIcon from './lcons/ArrowIcon'

const DownloadButton = () => {
  return (
    <button className='rounded-full border-2 border-[#6F126D]'>
        <span className='w-full border-2 border-[#D85CC5] px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-white bg-gradient-to-b from-[#D85CC5] to-[#FF3FEC]'>
            Download Now
            <ArrowIcon className='text-white w-[16px] h-[16px] -rotate-90' />
        </span>
    </button>
  )
}

export default DownloadButton