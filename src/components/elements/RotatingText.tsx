'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/RotatingText.module.css';

const WORDS = ['borderless', 'better', 'safer', 'stronger', 'smarter'];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      // Use functional update to avoid stale closures
      setIndex(prevIndex => {
        setPrev(prevIndex);
        return (prevIndex + 1) % WORDS.length;
      });
    }, 5000); // 5s interval

    return () => clearInterval(id);
  }, []);

  return (
    <span className={styles.wrap}>
      {/* Hidden sizer defines width = widest word */}
      <span className={styles.sizer} aria-hidden>
        {WORDS.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </span>

      {/* Outgoing word */}
      {prev !== null && (
        <span className={`${styles.word} ${styles.outgoing}`} key={`out-${prev}-${index}`}>
          {WORDS[prev]}
        </span>
      )}

      {/* Incoming (visible) word */}
      <span className={`${styles.word} ${styles.incoming}`} key={`in-${index}`}>
        {WORDS[index]}
      </span>
    </span>
  );
}
