import React, { Component } from "react";

import AgroformHeader from "../../image/jpg/agroform_headerIntro.jpg";
import AgroNewsImg from "../../image/jpg/agroNews_image.jpg";
import AgroWorkshop from "../../image/jpg/agroWorkshops_image.jpg";
import AgroformIcon from "../../image/svg/agroform_icon.svg";
// import agroformLogoWhite from "../../image/svg/agroform_logo_white.svg";

import berndBund from "../../image/jpg/formgroup-berndBund.jpg";

import {productData} from './products'

import ProductList from './productList'

import {news} from './news'

import IconCereal from "../../image/svg/ICON_fg_cereal.svg";
import IconCorn from "../../image/svg/ICON_fg_corn.svg";
import IconGrassland from "../../image/svg/ICON_fg_grassland.svg";
import IconSoil from "../../image/svg/ICON_fg_soil.svg";
import IconRape from "../../image/svg/ICON_fg_rape.svg";

import { MailIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
 


export default class Index extends Component {

  state={
    products:productData,
    filterState: productData,
  }

  

  handleFilter=(elm)=>{
    let filterElm;

    if (elm.target.alt===""){
      filterElm=this.state.products
    }
    else{
      filterElm=this.state.products.filter(item=>(item.field1===elm.target.alt || item.field2===elm.target.alt))
    }

    this.setState({
      filterState: filterElm
    })
  }

  render() {  
    
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
                            agroform - Unsere Produkte, Know-how und Expertise
                          </span>{" "}
                          <span className="text-green-lighter md:block">
                            im Bereich Landwirtschaft auf einer Plattform
                          </span>
                        </h1>
                        <p className="mt-3 text-base font-semibold text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Wir wollen nichts weniger, als in der Landwirtschaft Qualitätsprodukte vom Produzenten durch enge Zusammenarbeit mit dem Großhandel zu ihrem vollen Potenzial zu bringen - durch langfristige Beziehungen den Ertrag der Kunden zu verbessern und Produzenten mit nachhaltiger Entwicklung zu gewinnen.
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
                    <div className="mt-8 lg:mt-0 lg:col-span-6">
                      <div className="sm:mx-auto sm:overflow-hidden">
                        <div className="px-4 py-8">
                          <div className="mx-auto flex justify-center">
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
                <div className="grid grid-cols-5 gap-x-12 overflow-x-auto">

                  <div className="w-48 col-span-1 flex justify-center">
                  <button onClick={this.handleFilter} className="opacity-50 hover:opacity-100 focus:opacity-100">
                    <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                      <img
                        className="m-4 h-24 mx-auto"
                        src={IconCereal}
                        alt="Cereals"
                      />
                      <span className="block text-white">Getreide</span>
                    </h1>
                  </button>
                  </div>

                  <div className="w-48 col-span-1 flex justify-center">
                  <button onClick={this.handleFilter} className="opacity-50 hover:opacity-100 focus:opacity-100">
                    <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                      <img
                        className="m-4 h-24 mx-auto"
                        src={IconCorn}
                        alt="Corn"
                      />
                      <span className="block text-white">Mais</span>
                    </h1>
                  </button>
                  </div>

                  <div className="w-48 col-span-1 flex justify-center">
                  <button onClick={this.handleFilter} className="opacity-50 hover:opacity-100 focus:opacity-100">
                    <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                      <img
                        className="m-4 h-24 mx-auto"
                        src={IconRape}
                        alt="Rape"
                      />
                      <span className="block text-white">Raps</span>
                    </h1>
                  </button>
                  </div>

                  <div className="w-48 col-span-1 flex justify-center">
                  <button onClick={this.handleFilter} className="opacity-50 hover:opacity-100 focus:opacity-100">
                    <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                      <img
                        className="my-4 h-24 mx-auto"
                        src={IconSoil}
                        alt="Potato"
                      />
                      <span className="block text-white">Kartoffeln</span>
                    </h1>
                  </button>
                  </div>

                  <div className="w-48 col-span-1 flex justify-center">
                  <button onClick={this.handleFilter} className="opacity-50 hover:opacity-100 focus:opacity-100">
                    <h1 className="text-center item-center text-md font-medium uppercase tracking-tight">
                      <img
                        className="my-4 h-24 mx-auto"
                        src={IconGrassland}
                        alt="Grassland"
                      />
                      <span className="block text-white">Grünland</span>
                    </h1>
                  </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <ProductList products={this.state.filterState}/>
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
                  Marktreport unsere Experten zum freien Download
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-brown-light">  
                  Unsere Analyse und Einschätzung der aktuellen Marktsituation im Agrarbereich finden Sie hier im regelmäßigen Abstand zum freien Download. Nutzen Sie die weltweiten Informationen für Planungsansätze und Tendenzentscheidungen.
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
                  Sie bevorzugen den persönlichen Austausch? In einem Workshop tauschen wir uns gerne mit Ihnen aus.
                  </p>
                  <p className="mt-3 text-lg text-white">
                  Aufarbeitung von Themen – Produkteinschätzungen, Planungshilfen, Organisationsentwicklung, Führungs- und Motivationsthemen – werden auf Kunden- und Lieferantenwunsch von unseren Experten erarbeitet und in online-Workshops vermittelt.
                  </p>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="mailto:info@formgroup.io?subject=agroform - Workshop Anfrage"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-brown-light"
                      >
                        Workshop anfragen
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
}}
