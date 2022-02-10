import React from "react";

import { BeakerIcon, CubeIcon, ShieldCheckIcon} from "@heroicons/react/solid";

import iconBolt from "../../image/svg/ICON_fg_boltXl.svg";
import iconCereals from '../../image/svg/ICON_fg_cereal.svg';
import iconRape from '../../image/svg/ICON_fg_rape.svg';

import ImgCreals from "../../image/png/img_creals4.png"
const summary = [
  {
    id: 1,
    contentDe: "250 g/l Prothioconazol",
    contentEn: "250 g/l Prothioconazol",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: BeakerIcon,
    iconBackground: "bg-yellow-light",
    textColor: "text-yellow-light"
  },
  {
    id: 2,
    contentDe: "Die leistungsstarke Azol-Formulierung",
    contentEn: "Die leistungsstarke Azol-Formulierung",
    target: "",
    href: "",
    highlightDe: "nicht bienengefährlich (B4)",
    highlightEn: "nicht bienengefährlich (B4)",
    icon: CubeIcon,
    iconBackground: "bg-yellow-light",
    textColor: "text-yellow-light"
  },
  {
    id: 3,
    contentDe: "Günstige Gewässerabstandsauflagen",
    contentEn: "Günstige Gewässerabstandsauflagen",
    target: "",
    href: "",
    highlightDe: "gute Mischbarkeit",
    highlightEn: "gute Mischbarkeit",
    icon: ShieldCheckIcon,
    iconBackground: "bg-yellow-light",
    textColor: "text-yellow-light"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function bolt(props) {
  return (
    <>
      <section>
        <div className="py-10 bg-gradient-to-r from-yellow-medium to-yellow-lighter sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center ">
                <div className="lg:py-24 mt-16 z-10">
                  <span className="px-3 py-1.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-yellow-lighter rounded-full">
                    {props.lang === "de" ? "Raps" : "Rape"}
                  </span>
                  <span className="px-3 py-1.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-yellow-light rounded-full">
                    {props.lang === "de" ? "Getreide" : "Cereals"}
                  </span>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block uppercase">Bolt</span>
                  </h1>
                  <p className="mt-3 text-xl text-brown-dark font-extrabold sm:mt-5 sm:text-xl lg:text-2xl uppercase">
                  Steigert die Gewinnkurve
                  </p>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-2xl">
                  BOLT - Qualität, Leistung und Preis stimmen
                  </p>
                  {/* <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="../../../formgroup_valentiaFlyer.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent uppercase text-base font-bold rounded-md text-white bg-green-light hover:bg-green-lighter"
                      >
                        Download Valentia Flyer
                        <DocumentDownloadIcon
                          className="-mr-1 ml-3 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="mt-8 -mb-32 lg:mt-32 lg:relative">
                <div className="mx-auto max-w-sm grid sm:px-8">
                  <img
                    className="w-ful z-40"
                    src={iconBolt}
                    alt="bolt"
                  />
                </div>
              </div>

              {/* <div className="absolute insert-0">
                <img
                  className="object-cover w-full opacity-20"
                  src={ImgRape}
                  alt="bolt"
                />
                <div className="absolute inset-0 bg-yellow-light mix-blend-multiply" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={ImgCreals}
                alt="Cereals agroform"
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-yellow-medium font-semibold tracking-wide uppercase">
                  Bolt
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Auf einen Blick
                </h3>
                <div className="flow-root">
                  <ul className="mt-8">
                    {summary.map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-8">
                          {eventIdx !== summary.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  event.iconBackground,
                                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
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
                                <p className="text-sm text-black">
                                  {props.lang === "de"
                                    ? event.contentDe
                                    : event.contentEn}
                                  <a
                                    href={event.href}
                                    className="font-medium text-gray-900"
                                  >
                                    {event.target}
                                  </a>
                                </p>
                              </div>
                              <div className={classNames(event.textColor, "text-right font-bold text-sm whitespace-nowrap")}>
                                <p>
                                  {props.lang === "de"
                                    ? event.highlightDe
                                    : event.highlightEn}{" "}
                                </p>
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
          </div>
        </div>
      </section>

      <section>
      <div className=" bg-gradient-to-b from-brown-medium to-brown-darker">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <ShieldCheckIcon className="h-20 w-20 self-center text-white" aria-hidden="true"/>
            <dt className="order-1 mt-2 text-lg leading-6 font-medium text-brown-light">Hohe Wirksamkeit gegen </dt>
            <dd className="mt-2 order-2 text-lg font-extrabold text-white">Halmbasis- und Blattkrankheiten</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
             <img src={iconCereals} alt="cereals" className="h-20 w-20 self-center text-white"/>    
            <dt className="order-1 mt-2 text-lg leading-6 font-medium text-brown-light">In Getreide breit gegen</dt>
            <dd className="mt-2 order-2 text-lg font-extrabold text-white">Braunrost, Gelbrost, Mehltau, Netzflecken, Rhynchosporium, Septoria-Blattdürre, Septoria nodorum, Zwergrost, Halmbruchkrankheiten</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
             <img src={iconRape} alt="rape" className="h-20 w-20 self-center text-white"/>    
            <dt className="order-1 mt-2 text-lg leading-6 font-medium text-brown-light">In Raps hoch wirksam gegen</dt>
            <dd className="mt-2 order-2 text-lg font-extrabold text-white">Weißstängeligkeit</dd>
          </div>
        </dl>
      </div>
    </div>
      </section>
    </>
  );
}
