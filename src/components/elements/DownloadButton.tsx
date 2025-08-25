import React from 'react'
import ArrowIcon from './lcons/ArrowIcon'

const DownloadButton = () => {
  return (
    <button className='w-full px-[22px] py-[14px] rounded-full flex items-center justify-center gap-x-[6px] font-[600] leading-[24px] text-white bg-[#B001B0]'>
      Download Now
      <ArrowIcon className='text-white w-[16px] h-[16px] -rotate-90' />
    </button>
  )
}

export default DownloadButton