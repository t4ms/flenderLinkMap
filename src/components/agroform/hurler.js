import React from "react";

import { ThumbUpIcon, BeakerIcon, CubeIcon, ShieldCheckIcon, PuzzleIcon, CogIcon } from "@heroicons/react/solid";

import iconHurler from "../../image/svg/ICON_fg_hurler.svg";

import ImgGrassland from "../../image/png/img_grassland.png"
const summary = [
  {
    id: 1,
    contentDe: "200 g/l Fluroxypyr",
    contentEn: "200 g/l Fluroxypyr",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: BeakerIcon,
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
  },
  {
    id: 2,
    contentDe: "Emulsionskonzentrat (EC)",
    contentEn: "Emulsionskonzentrat (EC)",
    target: "",
    href: "",
    highlightDe: "HRAC-Gruppe: O",
    highlightEn: "HRAC-Gruppe: O",
    icon: CubeIcon,
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
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
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
  },
  {
    id: 4,
    contentDe: "Top gegen Klettenlabkraut",
    contentEn: "Top gegen Klettenlabkraut",
    target: "",
    href: "",
    highlightDe: "ab 5 °C ",
    highlightEn: "ab 5 °C ",
    icon: PuzzleIcon,
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
  },
  {
    id: 5,
    contentDe: "Gezielt und schnell wirksam",
    contentEn: "Gezielt und schnell wirksam",
    target: "",
    href: "",
    highlightDe: "langer Anwendungszeitraum",
    highlightEn: "langer Anwendungszeitraum",
    icon: CogIcon,
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
  },
  {
    id: 6,
    contentDe: "Gute Verträglichkeit",
    contentEn: "Gute Verträglichkeit",
    target: "",
    href: "",
    highlightDe: "idealer Mischpartner",
    highlightEn: "idealer Mischpartner",
    icon: ShieldCheckIcon,
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
  },
  {
    id: 7,
    contentDe: "Günstige Abstandsauflagen",
    contentEn: "Günstige Abstandsauflagen",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-medium",
    textColor: "text-green-medium"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function hurler(props) {
  return (
    <>
      <section>
        <div className="py-10 bg-gradient-to-r from-green-darker to-green-dark sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center ">
                <div className="lg:py-24 mt-16 z-10">
                  <span className="px-3 py-1.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-lighter rounded-full">
                    {props.lang === "de" ? "Grünfläche" : "Grassland"}
                  </span>
                  <span className="px-3 py-1.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-yellow-light rounded-full">
                    {props.lang === "de" ? "Getreide" : "Cereals"}
                  </span>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block uppercase">Hurler</span>
                  </h1>
                  <p className="mt-3 text-xl text-yellow-light font-extrabold sm:mt-5 sm:text-xl lg:text-2xl uppercase">
                  Gegen Unkräuter von früh bis spät
                  </p>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-2xl">
                  HURLER - Der Klettenlabkraut Star
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
                    className="w-full z-40"
                    src={iconHurler}
                    alt="hurler"
                  />
                </div>
              </div>

              {/* <div className="absolute insert-0 lg:-ml-8 lg:-mt-48">
                <img
                  className="object-cover opacity-25"
                  src={ImgCreals}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-green-medium mix-blend-multiply" />
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
                src={ImgGrassland}
                alt="grassland agroform"
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-green-medium font-semibold tracking-wide uppercase">
                  Hurler
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
