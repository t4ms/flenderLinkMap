// components/Home.js

import React from 'react';

import Navbar from './navbar';

import FgAnimationText from './animation/fgAnimationText'

import FormgroupAnimation from '../image/png/Animation_Platzhalter.png'

import Icon1 from '../image/svg/ICON_fg_light_1.svg'
import Icon2 from '../image/svg/ICON_fg_light_2.svg'
import Icon3 from '../image/svg/ICON_fg_light_3.svg'
import Icon4 from '../image/svg/ICON_fg_light_4.svg'

import IconKey1 from '../image/png/whatIsFormgroup.png'
import IconKey2 from '../image/png/whatDoesFormgroup.png'
import IconKey3 from '../image/png/whyFormgroup.png'


const features = [
  {
    name: '[Vertrieb & Change]',
    description:
      'Vertriebsstrategie – Preis- und Konditionssysteme. Profitabilität durch Veränderung',
    icon: Icon1,
  },
  {
    name: '[Produkte & Innovationen]',
    description:
      'Neuprodukt Akquise – Von Innovationsprodukte zu Generika. Mit uns zum profitablen Wachstum.',
    icon: Icon2,
  },
  {
    name: '[Einkauf & Logistik]',
    description:
      'Analysecheck und Optimierungswege',
    icon: Icon3,
  },
  {
    name: '[Brand & Marketing]',
    description:
      ' Marketingunterstützung – Nachhaltige und gezielte Werbeaktivitäten mit passenden, modernen Wegen',
    icon: Icon4,
  },
]

const keys = [
  { name: 'WAS IST FORMGROUP.', description: 'Formgroup ist ein offenes Netzwerk aus Experten mit branchen- und fach-spezifischem Know-How und regionalen & internationalen Partnern.', icon: IconKey1},
  { name: 'WAS MACHT FORMGROUP.',description: 'Die formgroup Experten unterstützen Produzenten wie auch Distributoren durch moderne Strategie- und Implementierungsentwicklungen im nationalen wie auch internationale Umfeld.', icon: IconKey2 },
  { name: 'WARUM FORMGROUP.',description: 'Formgroup bietet Experten eine Plattform auf dem sie ihr einzigartiges branchen-/ fachspezifisches Know-How den Partnern zur Verfügung stellen.', icon: IconKey3 },
]

const maintenance = () => {
  return (


<div className="mb-72">

<Navbar />

<div className="bg-gradient-to-br from-fgDefault-black via-fgDefault-black to-fgDefault-darker ... overflow-hidden " >
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
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight text-white sm:text-4xl md:text-5xl">

                <FgAnimationText />
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Team erfahrener und vernetzter Experten unterstützt Produzenten und Händler konzeptionell und operativ in allen Fragen rund um ihre Geschäfts-Strategie und Go-to-market Implementierung.
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
      <div className="lg:absolute lg:mt-72 lg:inset-y-0 lg:right-0 lg:w-1/2 lg:flex lg:flex-wrap lg:content-center sm:content-center sm:mb-36">
          
      
          {/* <FgHomeAnimation /> */}
        <img
          className="w-full object-scale-down sm:h-72 md:h-96 lg:h-96"
          src={FormgroupAnimation}
          alt=""
        />
      </div>
    </div>

    
    {/* Section2 */}

    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-fgDefault-medium uppercase">formgroup-Identität</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl uppercase">
         Wir formen Lösungen, Innovationen & Produkte
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Die Basis der formgroup bilden branchenspezifischen Know-How unserer Experten, regionalem Netzwerk unsere Partner und innovative Plattformen.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {keys.map((key) => (
              <div key={key.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="w-48 h-48 inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                      <img className="h-32" alt={key.icon} src={key.icon}></img>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{key.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {key.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Section 3 */}


    <div className="py-12 bg-white mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-fgDefault-medium font-semibold tracking-wide uppercase">formgroup</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          UNSERE LEISTUNGSBEREICHE
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Ziele sind Abläufe effizienter zu gestalten, Handlungsspielräume zu erweitern und Margen zu steigern.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-24 w-24">
                    <img alt={feature.icon} src={feature.icon}></img>
                  </div>
                  <p className="ml-32 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-32 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
</div>



  )
}

export default maintenance;
