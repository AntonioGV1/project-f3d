/* eslint-disable react/no-unescaped-entities */
import { Canvas } from "@react-three/fiber";
import { animate } from "motion";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
import RevealImage from "./components/RevealImage";

export default function Home() {

  // REVEAL PROGRESS ANIMATION
  const revealProgress = useMotionValue(0);

  useEffect(() => {
    animate(revealProgress, 1, {
      duration: 1.5,
      ease: "easeInOut",
    });
  }, [revealProgress]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Marquee header */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 flex text-white text-lg font-light">
          <span>think beyond - create the spark - lead with purpose - build without limits -</span>
          <span>think beyond - create the spark - lead with purpose - build without limits -</span>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2 flex text-white text-lg font-light">
          <span>think beyond - create the spark - lead with purpose - build without limits -</span>
          <span>think beyond - create the spark - lead with purpose - build without limits -</span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto px-4 md:px-6 lg:px-0">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center py-10 md:py-14">ÀETHER</h1>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen mt-10 md:mt-16">

          {/* Image column */}
          <div className="relative w-full h-[80vh] md:h-[100vh] lg:h-[140vh] flex justify-end items-center order-1 lg:order-3 overflow-hidden lg:col-span-2">
            <Canvas
              className="z-10 w-full h-full"
              style={{
                position: "relative",
                objectFit: "cover",
                maskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"
              }}
            >
              <RevealImage
                imageTexture="./img/textureupscaled.webp"
                revealProgress={revealProgress}
                isFullScreen={true}
              />
            </Canvas>
          </div>

          {/* Text content */}
          <div className="space-y-8 max-w-lg mx-auto order-2 px-6 md:px-8 lg:px-4 text-pretty lg:order-1 lg:pl-[90px]">
            <div className="space-y-2 md:mt-16 lg:mt-36">
              <p className="text-lg lg:text-xl font-bold text-center px-4 pt-8 text-pretty">
                Aether isn't just a coin
                <br />
                —it's unstoppable momentum
                <br />
                Feel it. Hold it. Be it.
              </p>
            </div>
            <div className="space-y-6 text-white">
              <p className="lg:text-xl leading-relaxed font-light px-4 text-pretty">
                $AETHER is where ambition meets
                <br />
                action. Inspired by the force that fuels the universe, holding Aether
                means you're part of a collective that doesn't just believe in potential—we create it. We push
                boundaries, break limits, and build something that lasts.
              </p>
              <p className="lg:text-xl leading-relaxed font-light px-4 text-pretty">
                Strength isn't noise. It's momentum.
                <br />
                Quiet power that moves markets, inspires change, and drives progress. Holding $AETHER means stepping up,
                standing out, and bringing others along for the
                <br />
                ride.
              </p>
            </div>
            <p className="text-sm font-mono text-center pt-4">
              <span className="bg-gray-900 text-white px-2 py-1 rounded-md">
                3Yoi1VbwqNuJY5JbTrXSGrwYnioR3Br5m
              </span>
            </p>

            {/* Botones */}
            <div className="flex justify-center gap-6 pt-4 pb-8 lg:pb-4">
              {/* Botón X */}
              <a
                href="https://x.com/aetherofsol" target="_blank" rel="noreferrer"
                className="bg-gray-900 px-6 md:px-8 py-3 rounded-lg transition-all duration-300 ease-out 
            hover:scale-110 hover:opacity-80 hover:bg-gradient-to-r from-gray-800 to-gray-700 
            hover:shadow-lg hover:shadow-gray-500/50 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* Botón DexScr */}
              <a
                href="#" target="_blank" rel="noreferrer"
                className="bg-gray-900 px-6 md:px-8 py-3 rounded-lg transition-all duration-300 ease-out 
            hover:scale-110 hover:opacity-80 hover:bg-gradient-to-r from-gray-800 to-gray-700 
            hover:shadow-lg hover:shadow-gray-500/50 flex items-center justify-center"
              >
                <img src="./logo/logo_dexS.svg" alt="DexScr" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

