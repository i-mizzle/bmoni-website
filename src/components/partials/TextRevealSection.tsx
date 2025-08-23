"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const split = new SplitType(
      containerRef.current.querySelectorAll(".reveal-text"),
      { types: "lines" }
    );

    if (split.lines) {
      // Ensure GSAP controls the color
      split.lines.forEach((line) => {
        (line as HTMLElement).style.color = "#B882B8";
      });

      gsap.to(split.lines as HTMLElement[], {
        color: "#ffffff",
        duration: 1,
        stagger: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    }

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
        <p className="reveal-text font-[700] font-fraunces text-[48px] leading-[60px] mb-[50px]">
          You hustle hard.<br />Shop like the world is your market.<br />Protect
          your funds in a stable currency.
        </p>
        <p className="reveal-text font-[700] font-fraunces text-[48px] leading-[60px] mb-[50px]">
          But your bank? Still Stuck in the past
        </p>
        <p className="reveal-text font-[700] font-fraunces text-[48px] leading-[60px] mb-[50px]">
          Payment delays. Hidden fees. Broken cards. Zero flexibility.
        </p>

        <div className="mb-[50px] bg-[#C94CD7] h-[2px] w-full" />

        <p className="reveal-text font-[700] font-fraunces text-[48px] leading-[60px] mb-[50px]">
          You deserve better, and that&apos;s why we built BMONI, because your
          money should move like you do.
        </p>

        <p className="reveal-text font-[700] font-fraunces text-[48px] leading-[60px] tracking-[0.5em] mb-[50px]">
          BORDERLESS
        </p>
      </div>
  );
}
