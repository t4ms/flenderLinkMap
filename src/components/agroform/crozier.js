import React from "react";

import { ThumbUpIcon, BeakerIcon, CubeIcon, ShieldCheckIcon, PuzzleIcon, CogIcon } from "@heroicons/react/solid";

import ImgPotato from "../../image/png/img_potato.png";
import ImgCreals1 from "../../image/png/img_creals1.png"
const summary = [
  {
    id: 1,
    contentDe: "800g/l Prosulfocarb",
    contentEn: "800g/l Prosulfocarb",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: BeakerIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
  {
    id: 2,
    contentDe: "Emulsionskonzentrat (EC)",
    contentEn: "Emulsionskonzentrat (EC)",
    target: "",
    href: "",
    highlightDe: "HRAC-Gruppe: N",
    highlightEn: "HRAC-Gruppe: N",
    icon: CubeIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
  {
    id: 3,
    contentDe: "Nicht schädigend für Nutzinsekten",
    contentEn: "Nicht schädigend für Nutzinsekten",
    target: "",
    href: "",
    highlightDe: "Nicht bienengefährlich (B4)",
    highlightEn: "Nicht bienengefährlich (B4)",
    icon: ShieldCheckIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
  {
    id: 4,
    contentDe: "Tankmischpartner zur Bekämpfung von ",
    contentEn: "Tankmischpartner zur Bekämpfung von ",
    target: "",
    href: "",
    highlightDe: "Ackerfuchsschwanz & Windhalm",
    highlightEn: "Ackerfuchsschwanz & Windhalm",
    icon: PuzzleIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
  {
    id: 5,
    contentDe: "Anwendung in Wintergerste, Winterweizen",
    contentEn: "Anwendung in Wintergerste, Winterweizen",
    target: "",
    href: "",
    highlightDe: "im Herbst",
    highlightEn: "im Herbst",
    icon: CogIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
  {
    id: 6,
    contentDe: "Resistenzvorbeugung",
    contentEn: "Resistenzvorbeugung",
    target: "",
    href: "",
    highlightDe: "Gute Verträglichkeit",
    highlightEn: "Gute Verträglichkeit",
    icon: ShieldCheckIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
  {
    id: 7,
    contentDe: "Spezialist bei Kartoffeln vor dem Auflaufen",
    contentEn: "Spezialist bei Kartoffeln vor dem Auflaufen",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: ThumbUpIcon,
    iconBackground: "bg-yellow-medium",
    textColor: "text-yellow-medium"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function crozier(props) {
  return (
    <>
      <section>
        <div className="py-10 bg-brown-dark sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center ">
                <div className="lg:py-24 mt-16 z-10">
                  <span className="px-3 py-1.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-brown-light rounded-full">
                    {props.lang === "de" ? "Kartoffel" : "Corn"}
                  </span>
                  <span className="px-3 py-1.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-yellow-light rounded-full">
                    {props.lang === "de" ? "Getreide" : "Cereals"}
                  </span>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">CROZIER</span>
                  </h1>
                  <p className="mt-3 text-xl text-yellow-light font-extrabold sm:mt-5 sm:text-xl lg:text-2xl uppercase">
                  Doppeltes Potential für Ihr Feld
                  </p>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-2xl">
                  CROZIER- Leistungsplus gegen Ackerfuchsschwanz
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

              {/* <div className="mt-12 -mb-32 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md grid place-items-center sm:px-8 sm:max-w-2xl lg:max-w-none lg:px-0">
                  <img
                    className="w-full z-40 justify-item-center lg:absolute lg:inset-y-32 lg:left-16 lg:-ml-16 lg:h-96 lg:w-auto lg:max-w-none"
                    src={Potato}
                    alt=""
                  />
                </div>
              </div> */}

              <div className="absolute insert-0 lg:-ml-8 lg:-mt-48">
                <img
                  className="object-cover"
                  src={ImgPotato}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-brown-dark mix-blend-multiply" />
              </div>
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
                src={ImgCreals1}
                alt="Cereals agroform"
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-yellow-medium font-semibold tracking-wide uppercase">
                  Crozier
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
    </>
  );
}
