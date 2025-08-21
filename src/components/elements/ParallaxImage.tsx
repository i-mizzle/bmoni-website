// components/ParallaxImage.tsx
"use client";

import { useEffect, useState } from "react";

interface ParallaxImageProps {
  className?: string;
  backgroundImage: string;
  speed?: number; // smaller = slower scroll
  style?: React.CSSProperties;
}

export default function ParallaxImage({
  className = "",
  backgroundImage,
  speed = 0.3,
  style = {},
}: ParallaxImageProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transform: `translateY(${offset}px)`,
        willChange: "transform",
        ...style,
      }}
    />
  );
}
