import React from "react";

import AgroformHeader from "../../image/jpg/agroform_headerIntro.jpg";
import AgroNewsImg from "../../image/jpg/agroNews_image.jpg";
import AgroWorkshop from "../../image/jpg/agroWorkshops_image.jpg";
import AgroformIcon from "../../image/svg/agroform_icon.svg";
// import agroformLogoWhite from "../../image/svg/agroform_logo_white.svg";

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

import { DocumentDownloadIcon, MailIcon } from "@heroicons/react/solid";

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

const news = [
  {
    id: 1,
    content: "agroform - Marktreport",
    target: "Hot News",
    href: "#",
    date: "KW07",
    icon: DocumentDownloadIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: DocumentDownloadIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "KW07",
    datetime: "2020-09-28",
    icon: DocumentDownloadIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: DocumentDownloadIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: DocumentDownloadIcon,
    iconBackground: "bg-green-500",
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
                    <div className="p-5 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
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
          <section id="productfinder" className="">
            <div className="">
              <div className="relative mt-24 p-5">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-brown-light" />
                </div>
                <div className="relative flex justify-start">
                  <span className="p-1 bg-brown-darker text-md font-medium uppercase text-brown-light">
                    ProduktFinder
                  </span>
                </div>
              </div>

              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-md font-semibold uppercase text-brown-light tracking-wide">
                  Die Produkte unserer Partner sind vielseitig anwendbar
                  speziell in den Bereichen:
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

          <section id="Reports" className="">
            <div className="relative mt-24 p-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-brown-light" />
              </div>
              <div className="relative flex justify-start">
                <span className="p-1 bg-brown-darker text-md font-medium uppercase text-brown-light">
                  Marktreports
                </span>
              </div>
            </div>

            <div className="">
              <div className="mx-auto px-4 sm:pt-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-base font-semibold text-brown-light tracking-wide uppercase">
                    Agro Marktreport
                  </h2>
                  <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Download your weekly market reports for free
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-brown-light">
                    Start building for free, then add a site plan to go live.
                    Account plans unlock additional features.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg: relative mt-12 bg-brown-dark">
              <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                  <div className="flow-root">
                    <ul className="mb-8">
                      {news.map((event, eventIdx) => (
                        <li key={event.id}>
                          <div className="relative pb-12">
                            {eventIdx !== news.length - 1 ? (
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-brown-light"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={classNames(
                                    event.iconBackground,
                                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-brown-light"
                                  )}
                                >
                                  <event.icon
                                    className="h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-md text-white hover:underline">
                                    <a href={event.href}>{event.content} </a>
                                    <a
                                      href={event.href}
                                      className="px-3 py-0.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-light rounded-full"
                                    >
                                      {event.target}
                                    </a>
                                  </p>
                                </div>
                                <div className="text-right font-semibold text-sm whitespace-nowrap text-white">
                                  <time dateTime={event.datetime}>
                                    {event.date}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={AgroNewsImg}
                  alt="agronews"
                />
              </div>
            </div>
          </section>

          <section id="Workshops" className="">
            <div className="relative mt-24 p-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-brown-light" />
              </div>
              <div className="relative flex justify-start">
                <span className="p-1 bg-brown-darker text-md font-medium uppercase text-brown-light">
                  Workshops
                </span>
              </div>
            </div>
            <div className="relative bg-brown-dark">
              <div className="h-56 bg-green-light sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                  className="w-full h-full object-cover"
                  src={AgroWorkshop}
                  alt=""
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-base font-semibold uppercase tracking-wider text-brown-light">
                    Meet the agroform-Experts
                  </h2>
                  <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Shedule workshop with ower agroform expert
                  </p>
                  <p className="mt-3 text-lg text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                    ullamcorper eu enim et fermentum, augue. Aliquet amet
                    volutpat quisque ut interdum tincidunt duis.
                  </p>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="/"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-brown-light"
                      >
                        Send us an Email
                        <MailIcon
                          className="-mr-1 ml-3 h-5 w-5 text-brown-dark"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
