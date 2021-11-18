import React from 'react'


import Icon1 from '../../image/svg/ICON_fg_light_1.svg'
import Icon2 from '../../image/svg/ICON_fg_light_2.svg'
import Icon3 from '../../image/svg/ICON_fg_light_3.svg'
import Icon4 from '../../image/svg/ICON_fg_light_4.svg'


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

export default function contentfgfeature() {
    return (
        <div className="py-12 bg-white mt-24">
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
