import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-text");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // reveal when 30% of the text is in view
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <p className="reveal-text">
        You live in the future. It&apos;s time your money caught up.
      </p>
      <p className="reveal-text">
        You hustle hard.<br />Shop like the world is your market.<br />Protect your funds in a stable currency.
      </p>
      <p className="reveal-text">
        But your bank? Still Stuck in the past
      </p>
      <p className="reveal-text">
        Payment delays. Hidden fees. Broken cards. Zero flexibility.
      </p>

      <div className="mb-[50px] bg-[#C94CD7] h-[2px] w-full" />

      <p className="reveal-text">
        Your deserve better, and that&apos;s why we built BMONI, because your money should move like you do.
      </p>

      <p className="reveal-text tracking-[0.2em]">
        BORDERLESS
      </p>
    </div>
  );
}
