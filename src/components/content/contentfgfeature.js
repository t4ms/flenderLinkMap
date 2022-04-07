import React from 'react'


import Icon1 from '../../image/svg/ICON_fg_light_1.svg'
import Icon2 from '../../image/svg/ICON_fg_light_2.svg'
import Icon3 from '../../image/svg/ICON_fg_light_3.svg'
import Icon4 from '../../image/svg/ICON_fg_light_4.svg'


const features = [
  {
    nameDe: '[Strategie & Change]',
    nameEn: '[Strategy & Change]',
    descriptionDe: 'Marktanalysen, Chancen & Risiken, Profitabilität durch Veränderung, 5-Jahres-Pläne.',
    descriptionEn: 'Market analyses, opportunities & risks, profitability through change, 5-year plans.',
    icon: Icon1,
  },
  {
    nameDe: '[Vertrieb & Kunden]',
    nameEn: '[Sales & Customers]',
    descriptionDe: 'Vertriebsstrategie – Preis- und Konditionssysteme. Kundenlisten und Beziehungen nutzen.',
    descriptionEn: 'Sales strategy - price and condition systems. Use customer lists and relationships.',
    icon: Icon1,
  },
  {
    nameDe: '[Produkte & Innovationen]',
    nameEn: '[Products & Innovations]',
    descriptionDe: 'Ob Innovationsprodukte oder Generika, mit uns setzen Sie auf profitables Wachstum.',
    descriptionEn: 'Whether innovation products or generics, with us you can rely on profitable growth.',
    icon: Icon2,
  },
  {
    nameDe: '[Einkauf & Logistik]',
    nameEn: '[Purchasing & Logistics]',
    descriptionDe: 'Analysecheck und Optimierungswege.',
    descriptionEn: 'Analysis check and ways of optimisation.',
    icon: Icon3,
  },
  {
    nameDe: '[Brand & Marketing]',
    nameEn: '[Brand & Marketing]',
    descriptionDe: 'Marketingunterstützung – Nachhaltige und gezielte Produktpositionierung. 4 P-Modell - traditionelle und moderne Methoden.',
    descriptionEn: 'Marketing support - sustainable and targeted product positioning. 4 P model - traditional and modern methods.',
    icon: Icon4,
  },
]

export default function contentfgfeature(props) {
    return (
        <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
          <h2 className="inline-flex items-center px-3 py-0.5 my-4 rounded-full text-md font-medium bg-gray-200 text-fgDefault-black uppercase">
          {props.lang==="de" ? "formgroup Angebote" : "formgroup quote"}
        </h2>
            <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {props.lang==="de" ? "UNSERE LEISTUNGSBEREICHE" : "OUR PERFORMANCE AREAS"}
            
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {props.lang==="de" ? "Ziel ist es, Marktpotentiale zu erkennen, Abläufe effizient zu gestalten und damit Margen zu steigern."
             : "Our target is to recognise market potential, design processes efficiently and thus increase margins."}
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
                    <p className="ml-32 text-lg leading-6 font-medium text-gray-900">
                    {props.lang==="de" ? feature.nameDe : feature.nameEn}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-32 text-base text-gray-500">
                  {props.lang==="de" ? feature.descriptionDe : feature.descriptionEn}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
}
