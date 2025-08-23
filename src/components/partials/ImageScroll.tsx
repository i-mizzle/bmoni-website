// components/ScrollingLogos.js
import React from 'react';
// import styles from '../styles/PartnersScroll.module.css';
import styles from '../../styles/PartnersScroll.module.css'
import Image from 'next/image';

const logos = [
  '/img/scroller/scroller-1.png',
  '/img/scroller/scroller-2.png',
  '/img/scroller/scroller-3.png',
  '/img/scroller/scroller-4.png',
  '/img/scroller/scroller-5.png',
];

const ImageScroll = () => {
  return (
    <div className={styles.scroller}>
      <div className={styles.fadeLeft + " " + styles.fadeEffect}></div>
        <div className={styles.scrollerInner}>
          {logos.concat(logos).map((logo, index) => (
            <div 
              key={index} 
              className={`${styles.logo} mx-[12px] flex items-center relative`}
            >
              <Image
                src={logo}
                alt={`image ${index % logos.length + 1}`}
                width={600}       // arbitrary but > height (helps Next.js optimization)
                height={260}      // match scroller height
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      <div className={styles.fadeRight + " " + styles.fadeEffect}></div>
    </div>
  );
};

export default ImageScroll;
