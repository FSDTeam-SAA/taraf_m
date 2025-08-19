"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const lines = [
  [{ text: "في نص، نمنح هذا الصوت مكانًا." }],
  [{ text: "حيث تلتقي الكلمات بالمعنى." }],
  [{ text: "ونكتب المستقبل معًا." }],
];

const Banner = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step <= lines.length) {
        setVisibleLines(step);
      } else {
        setVisibleLines(0);
        step = 0;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen lg:max-w-[500px] mx-auto w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-between items-center text-white">
        {/* Top Logo */}
        <div className="pt-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={48}
            className="h-12 w-auto"
          />
        </div>

        {/* Middle Text (progressive reveal) */}
        <div className="flex flex-col gap-4 text-center">
          {lines.slice(0, visibleLines).map((words, idx) => (
            <TypewriterEffectSmooth
              key={idx} // stable key
              words={words}
              className="justify-center"
              animate={idx === visibleLines - 1} // 👈 animate only the new line
            />
          ))}
        </div>

        {/* Bottom Scroll Down Icon */}
        <div className="pb-6 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
