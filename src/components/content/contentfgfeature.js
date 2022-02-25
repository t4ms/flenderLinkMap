import React from 'react'


import Icon1 from '../../image/svg/ICON_fg_light_1.svg'
import Icon2 from '../../image/svg/ICON_fg_light_2.svg'
import Icon3 from '../../image/svg/ICON_fg_light_3.svg'
import Icon4 from '../../image/svg/ICON_fg_light_4.svg'


const features = [
  {
    name: '[Strategie & Change]',
    description:
      'Marktanalysen, Chancen & Risiken, Profitabilität durch Veränderung, 5-Jahres-Pläne.',
    icon: Icon1,
  },
  {
    name: '[Vertrieb & Kunden]',
    description:
      'Vertriebsstrategie – Preis- und Konditionssysteme. Kundenlisten und Beziehungen nutzen.',
    icon: Icon1,
  },
  {
    name: '[Produkte & Innovationen]',
    description:
      'Ob Innovationsprodukte oder Generika, mit uns setzen Sie auf profitables Wachstum.',
    icon: Icon2,
  },
  {
    name: '[Einkauf & Logistik]',
    description:
      'Analysecheck und Optimierungswege.',
    icon: Icon3,
  },
  {
    name: '[Brand & Marketing]',
    description:
      ' Marketingunterstützung – Nachhaltige und gezielte Produktpositionierung. 4 P-Modell - traditionelle und moderne Methoden.',
    icon: Icon4,
  },
]

export default function contentfgfeature() {
    return (
        <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
          <h2 className="inline-flex items-center px-3 py-0.5 my-4 rounded-full text-md font-medium bg-gray-200 text-fgDefault-black uppercase">
          formgroup Angebote
        </h2>
            <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            UNSERE LEISTUNGSBEREICHE
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ziel ist es, Marktpotentiale zu erkennen, Abläufe effizient zu gestalten und damit Margen zu steigern.
            </p>
          </div>
  
          <div className="mt-10 mb-48">
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
    )
}
