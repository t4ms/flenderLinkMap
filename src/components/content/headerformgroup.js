import React from 'react'

import FgAnimationText from '../animation/fgAnimationText'

import FormgroupAnimation from '../../image/png/Animation_Platzhalter.png'

export default function headerformgroup(props) {
    return (
        <div className="-mt-24 bg-gradient-to-br from-fgDefault-black via-fgDefault-black to-fgDefault-darker ... overflow-hidden " >
        <div className="max-w-7xl h-10xl mx-auto">
          <div className="pb-8 bg- sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen lg:flex lg:flex-wrap lg:content-center">
            {/* <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="#0d1c03"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> */}
  
  
            <main className="mt-24 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-18 lg:px-8 xl:mt-24">
              <div className="sm:text-center lg:text-left inline">
                <h1 className="text-5xl tracking-tight text-white sm:text-4xl md:text-5xl">
  
                  <FgAnimationText lang={props.lang}/>
                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.lang==="de" ? 'Team erfahrener und global vernetzter Experten unterstützt Produzenten und Händler in allen Fragen rund um ihre Geschäfts-Strategie und Go-to-market Implementierung.' : 'promise'}
                
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
            {/* <FgHomeAnimation /> */}
          <img
            className="w-full h-96 object-scale-down"
            src={FormgroupAnimation}
            alt=""
          />
        </div>
  </div>
    )
}
