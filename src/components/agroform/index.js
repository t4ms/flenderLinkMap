import React from "react";

import AgroformHeader from "../../image/jpg/agroform_headerIntro.jpg";
import AgroformIcon from "../../image/svg/agroform_icon.svg";
import agroformLogoWhite from "../../image/svg/agroform_logo_white.svg";

import berndBund from "../../image/jpg/formgroup-berndBund.jpg";

import iconValentia from "../../image/svg/ICON_fg_valentia.svg";
import iconCrozier from "../../image/svg/ICON_fg_crozier.svg";
// import iconBoltXl from "../../image/svg/ICON_fg_boltXl.svg";
// import iconHurler from "../../image/svg/ICON_fg_hurler.svg";

import IconCereal from "../../image/svg/ICON_fg_cereal.svg";
import IconCorn from "../../image/svg/ICON_fg_corn.svg";
import IconGrassland from "../../image/svg/ICON_fg_grassland.svg";
import IconSoil from "../../image/svg/ICON_fg_soil.svg";
import IconRape from "../../image/svg/ICON_fg_rape.svg";

const products = [
  {
    name: "Valentia",
    ingredient1: "Fluroxypyr 100g/l +",
    ingredient2: "Florasulam 2g/l",
    role: "Admin",
    slogan: "Einzigartig in Mais – Top in Getreide",
    field1: "Mais",
    styling1: "text-white bg-green-light",
    field2: "Getreide",
    styling2: "text-white bg-yellow-light",
    link: "./agroform/valentia",
    image: iconValentia,
  },
  {
    name: "Crozier",
    ingredient1: "Fluroxypyr 100g/l +",
    ingredient2: "Florasulam 2g/l",
    slogan: "Einzigartig in Mais – Top in Getreide",
    field1: "Getreide",
    styling1: "text-white bg-yellow-light",
    field2: "Kartoffeln",
    styling2: "text-white bg-brown-medium",
    link: "./agroform/crozier",
    image: iconCrozier,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  return (
    <div>
      <main className="bg-brown-darker">
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0" />
            <div className=" mx-auto">
              <div className="relative sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={AgroformHeader}
                    alt="agroform"
                  />
                  <div className="absolute inset-0 bg-green-darker mix-blend-overlay" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="bg-green-dark bg-opacity-50 p-5 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                      <div>
                        <a
                          href="/"
                          className="inline-flex items-center text-white bg-green-dark rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                        >
                          <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-light rounded-full">
                            formgroup
                          </span>
                          <span className="ml-4 text-sm">Plattform</span>
                        </a>
                        <h1 className="mt-4 text-xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-4xl">
                          <span className="md:block">
                            Unsere Produkte, Know-how und Expertise
                          </span>{" "}
                          <span className="text-green-lighter md:block">
                            im Bereich Pflanzenschutz auf einer Platform
                          </span>
                        </h1>
                        <p className="mt-3 text-base font-semibold text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                          Wir wollen nichts weniger, als in der Landwirtschaft
                          Qualitätsprodukte vom Produzenten durch enge
                          Zusammenarbeit mit dem Großhandel zu ihrem vollen
                          Potenzial zu bringen - durch langfristige Beziehungen
                          den Ertrag der Kunden zu verbessern und Produzenten
                          mit nachhaltiger Entwicklung zu gewinnen.
                        </p>
                        <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                          agroform Expert
                        </p>
                        <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                          <div className="flex flex-wrap items-start justify-between">
                            <div className="flex items-center space-x-4 lg:space-x-6">
                              <img
                                className="w-24 h-24 rounded-full"
                                src={berndBund}
                                alt="Bernd Bund - formgroup expert"
                              />
                              <div className="text-lg leading-6 space-y-1 text-white">
                                <h3 className="font-semibold ">Bernd Bund</h3>
                                <p className="font-regular text-white">
                                  25+ Years Experience Agrobusiness and
                                  part-time farmer
                                </p>
                                <a
                                  href="/"
                                  className="flex items-center justify-center w-24 px-2 py-2 text-base font-medium rounded-md shadow-sm text-white bg-green-light hover:bg-green-medium"
                                >
                                  Kontakt
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                      <div className="sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                        <div className="px-4 py-8 sm:px-10">
                          <div className="my-10 mx-auto flex justify-center">
                            <img
                              src={AgroformIcon}
                              className=""
                              alt="agroform"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <section className="">
          <div className="bg-brown-black bg-opacity-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-md font-semibold uppercase text-brown-light tracking-wide">
                Die Produkte unserer Partner sind vielseitig anwendbar speziell
                in den Bereichen:
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                    <img
                      className="my-4 h-24 mx-auto"
                      src={IconCereal}
                      alt="Cereals"
                    />
                    <span className="block text-white">Getreide</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                    <img
                      className="my-4 h-24 mx-auto"
                      src={IconCorn}
                      alt="Corn"
                    />
                    <span className="block text-white">Mais</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                    <img
                      className="my-4 h-24 mx-auto"
                      src={IconRape}
                      alt="Rape"
                    />
                    <span className="block text-white">Raps</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                    <img
                      className="my-4 h-24 mx-auto"
                      src={IconSoil}
                      alt="Soil"
                    />
                    <span className="block text-white">Kartoffeln</span>
                  </h1>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                    <img
                      className="my-4 h-24 mx-auto"
                      src={IconGrassland}
                      alt="Grassland"
                    />
                    <span className="block text-white">Grünland</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          </section>
          
        </div>

        {/* More main page content here... */}

        <section id="productfinder" className="bg-brown-black bg-opacity-50">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
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
                        <tr
                          key={product.name}
                          className="hover:bg-green-lighter hover:bg-opacity-25"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href={product.link}>
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-16 w-16">
                                  <img
                                    className="h-16 w-16"
                                    src={product.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {product.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {product.slogan}
                                  </div>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href={product.link}>
                              <div className="text-sm text-gray-900">
                                {product.ingredient1}
                              </div>
                              <div className="text-sm text-gray-900">
                                {product.ingredient2}
                              </div>
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href={product.link}>
                              <span
                                className={classNames(
                                  product.styling1,
                                  "mx-0.5 px-2 inline-flex text-xs font-semibold leading-5 uppercase tracking-wide rounded-full"
                                )}
                              >
                                {product.field1}
                              </span>
                              <span
                                className={classNames(
                                  product.styling2,
                                  "mx-0.5 px-2 inline-flex text-xs font-semibold leading-5 uppercase tracking-wide rounded-full"
                                )}
                              >
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
