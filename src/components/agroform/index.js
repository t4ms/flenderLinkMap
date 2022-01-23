import React from "react";

import AgroformHeader from "../../image/jpg/agroform_headerIntro.jpg";
import agroformLogoWhite from "../../image/svg/agroform_logo_white.svg";

import iconValentia from "../../image/svg/ICON_fg_valentia.svg";
import iconCrozier from "../../image/svg/ICON_fg_crozier.svg";
// import iconBoltXl from "../../image/svg/ICON_fg_boltXl.svg";
// import iconHurler from "../../image/svg/ICON_fg_hurler.svg";

import IconCereal from "../../image/svg/ICON_fg_cereal.svg"
import IconCorn from "../../image/svg/ICON_fg_corn.svg"
import IconGrassland from "../../image/svg/ICON_fg_grassland.svg"
import IconSoil from "../../image/svg/ICON_fg_soil.svg"
import IconRape from "../../image/svg/ICON_fg_rape.svg"

const products = [
  {
    name: 'Valentia',
    ingredient1: 'Fluroxypyr 100g/l +',
    ingredient2: 'Florasulam 2g/l',
    role: 'Admin',
    slogan: 'Einzigartig in Mais – Top in Getreide',
    field1: 'Mais',
    styling1:'text-white bg-green-light',
    field2: 'Getreide',
    styling2:'text-white bg-yellow-light',
    link: './agroform/valentia',
    image: iconValentia
  },
  {
    name: 'Crozier',
    ingredient1: 'Fluroxypyr 100g/l +',
    ingredient2: 'Florasulam 2g/l',
    slogan: 'Einzigartig in Mais – Top in Getreide',
    field1: 'Getreide',
    styling1:'text-white bg-yellow-light',
    field2: 'Boden',
    styling2:'text-white bg-brown-medium',
    link: './agroform/crozier',
    image: iconCrozier
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


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
                  <h1 className="bg-green-lighter bg-opacity-50 py-8 text-center text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl">
                    <span className="block text-white">Unsere Produkten, Know-how und Expertise</span>
                    <span className="block text-white">im Bereich Pflanzenschutz auf einer Platform</span>
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

        <section id="productfinder">
          <div className="flex flex-col lg:m-5 sm:m-5">
            <div className="-my-2 overflow-x-auto sm:-mx-3 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Produkt
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Wirkstoff
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Anwendung
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.name} className="hover:bg-green-lighter hover:bg-opacity-25">
                          <td className="px-6 py-4 whitespace-nowrap">
                          <a href={product.link}>
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16">
                                <img className="h-16 w-16" src={product.image} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.slogan}</div>
                              </div>
                            </div>
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <a href={product.link}>
                            <div className="text-sm text-gray-900">{product.ingredient1}</div>
                            <div className="text-sm text-gray-900">{product.ingredient2}</div>
                          </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <a href={product.link}>
                            <span className={classNames(product.styling1, "mx-0.5 px-2 inline-flex text-xs font-semibold leading-5 uppercase tracking-wide rounded-full")}>
                              {product.field1}
                            </span>
                            <span className={classNames(product.styling2, "mx-0.5 px-2 inline-flex text-xs font-semibold leading-5 uppercase tracking-wide rounded-full")}>
                              {product.field2}
                            </span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
    


  );
}
