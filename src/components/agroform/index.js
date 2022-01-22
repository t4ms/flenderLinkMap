import React from "react";

import AgroformHeader from "../../image/jpg/agroform_headerIntro.jpg";
import agroformLogoWhite from "../../image/svg/agroform_logo_white.svg";

import IconCereal from "../../image/svg/ICON_fg_cereal.svg"
import IconCorn from "../../image/svg/ICON_fg_corn.svg"
import IconGrassland from "../../image/svg/ICON_fg_grassland.svg"
import IconSoil from "../../image/svg/ICON_fg_soil.svg"
import IconRape from "../../image/svg/ICON_fg_rape.svg"


export default function Index() {
  return (
    <div>
  <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={AgroformHeader}
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-green-darker mix-blend-overlay" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <div className="my-10 mx-auto flex justify-center">
                    <img 
                      src={agroformLogoWhite}
                      className="w-3/6"
                      alt="agroform"
                    />
                    </div>
                  <h1 className="text-center text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl">
                    <span className="block text-white">Unsere Produkten, Know-how und Expertise</span>
                    <span className="block text-white">im Bereich Pflanzenschutz</span>
                  </h1>
                  <p className="mt-6 font-bold max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  Wir wollen nichts weniger, als in der Landwirtschaft Qualitätsprodukte vom Produzenten durch enge Zusammenarbeit mit dem Großhandel zu ihrem vollen Potenzial zu bringen - durch langfristige Beziehungen den Ertrag der Kunden zu verbessern und Produzenten mit nachhaltiger Entwicklung zu gewinnen.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="/"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-light bg-white hover:bg-brown-dark sm:px-8"
                      >
                        Kontakt
                      </a>
                      <a
                        href="/"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-light hover:bg-opacity-70 sm:px-8"
                      >
                        Informationsmaterial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Die Produkte unserer Partner sind vielseitig anwendbar speziell in den Bereichen:
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                  <img className="my-4 h-24 mx-auto" src={IconCereal} alt="Cereals" />
                    <span className="block">Getreide</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                  <img className="my-4 h-24 mx-auto" src={IconCorn} alt="Corn" />
                    <span className="block">Mais</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                  <img className="my-4 h-24 mx-auto" src={IconRape} alt="Rape" />
                    <span className="block">Raps</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                  <img className="my-4 h-24 mx-auto" src={IconSoil} alt="Soil" />
                    <span className="block">Boden</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                  <img className="my-4 h-24 mx-auto" src={IconGrassland} alt="Grassland" />
                    <span className="block">Wiesen</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
    


  );
}
