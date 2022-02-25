import React from "react";

import FgAnimationText from "../animation/fgAnimationText";

import FormgroupAnimation from "../../image/svg/formgroupTiangel.svg";

import formgroupVideoIntro from "../../image/mp4/formgroupVideo.mp4";

export default function headerformgroup(props) {
  return (
    <>
      <header class="-mt-24 relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div class="h-full relative z-30 text-2xl w-screen text-white bg-white bg-opacity-75 rounded-xl">
          <div className="mt-24 overflow-hidden ">
            <div className="max-w-7xl h-10xl mx-auto">
              <div className="pb-8 bg- sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen lg:flex lg:flex-wrap lg:content-center">
                <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-18 lg:px-8 xl:mt-24">
                  <div className="sm:text-center lg:text-left inline">
                    <h1 className="text-5xl tracking-tight text-white sm:text-4xl md:text-5xl">
                      <FgAnimationText lang={props.lang} />
                    </h1>
                    <p className="mt-3 text-base text-fgDefault-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      {props.lang === "de"
                        ? "Team erfahrener und global vernetzter Experten unterstützt Produzenten und Händler in allen Fragen rund um ihre Geschäfts-Strategie und Go-to-market Implementierung."
                        : ""}
                    </p>
                    {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                    >
                      Valentia Flyer
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fgValentia-200 hover:bg-Valentia-400 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div> */}
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:flex lg:flex-wrap lg:content-center sm:content-center">
              <img
                className="w-full h-72 lg:h-96 md:h-72 sm:h-48"
                src={FormgroupAnimation}
                alt=""
              />
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={formgroupVideoIntro} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
}
