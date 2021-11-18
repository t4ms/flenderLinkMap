import React from 'react'

import IconKey1 from '../../image/png/whatIsFormgroup.png'
import IconKey2 from '../../image/png/whatDoesFormgroup.png'
import IconKey3 from '../../image/png/whyFormgroup.png'

const keys = [
    { name: 'WAS IST FORMGROUP.', description: 'Formgroup ist ein offenes Netzwerk aus Experten mit branchen- und fach-spezifischem Know-How und regionalen & internationalen Partnern.', icon: IconKey1},
    { name: 'WAS MACHT FORMGROUP.',description: 'Die formgroup Experten unterstützen Produzenten wie auch Distributoren durch moderne Strategie- und Implementierungsentwicklungen im nationalen wie auch internationale Umfeld.', icon: IconKey2 },
    { name: 'WARUM FORMGROUP.',description: 'Formgroup bietet Experten eine Plattform auf dem sie ihr einzigartiges branchen-/ fachspezifisches Know-How den Partnern zur Verfügung stellen.', icon: IconKey3 },
  ]

export default function contentfgidenity() {
    return (
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
    )
}
