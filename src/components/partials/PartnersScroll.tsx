// components/ScrollingLogos.js
import React from 'react';
// import styles from '../styles/PartnersScroll.module.css';
import styles from '../../styles/PartnersScroll.module.css'
import Image from 'next/image';
// import Busha from '/img/partners/busha.svg'
// import Allawee from '/img/partners/allawee.svg'
// import Quidax from '/img/partners/quidax.svg'
// import Bridge from '/img/partners/bridge.svg'
// import Aluko from '/img/partners/aluko-oyeode.svg'

const logos = [
  '/img/partners/busha.svg',
  '/img/partners/allawee.svg',
  '/img/partners/quidax.svg',
  '/img/partners/bridge.svg',
  '/img/partners/aluko-oyebode.svg',
];

const PartnersScroll = () => {
  return (
    <div className={styles.scroller}>
      <div className={styles.fadeLeft + " " + styles.fadeEffect}></div>
      <div className={styles.scrollerInner}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className={`${styles.logoContainer} mx-[20px] w-[200px] h-[100px] flex items-center relative`}>
            <Image 
              src={logo} 
              alt={`Logo ${index % logos.length + 1}`} 
              fill 
              className='object-contain' />
          </div>
        ))}
      </div>
      <div className={styles.fadeRight + " " + styles.fadeEffect}></div>
    </div>
  );
};

export default PartnersScroll;
