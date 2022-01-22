import React from "react";

import { DocumentDownloadIcon } from "@heroicons/react/solid";

import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";

import ValentiaIntro from "../../image/svg/Valentia_Intro.svg";
import ValentiaIntroImg from "../../image/png/img_valentia-intro.png";
import iconCorn from "../../image/svg/ICON_fg_corn.svg";

const summary = [
  {
    id: 1,
    contentDe: "Fluroxypyr 100g/l, Florasulam 2g/l",
    contentEn: "Fluroxypyr 100g/l, Florasulam 2g/l",
    target: "",
    href: "",
    highlightDe: "Resistenzgruppe: 4, 2",
    highlightEn: "Resistenzgruppe: 4, 2",
    icon: UserIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 2,
    contentDe: "Suspensionsemulsion  (SE)",
    contentEn: "Suspensionsemulsion  (SE)",
    target: "",
    href: "",
    highlightDe: "„grüne Formulierung“",
    highlightEn: "„grüne Formulierung“",
    icon: CheckIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 3,
    contentDe: "Besonders günstiges Umwelt-, Nützlings- und Handlingsprofil",
    contentEn: "Besonders günstiges Umwelt-, Nützlings- und Handlingsprofil",
    target: "",
    href: "",
    highlightDe: "Blattaktiv",
    highlightEn: "Blattaktiv",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 4,
    contentDe: "Nicht schädigend für Nutzinsekten",
    contentEn: "Nicht schädigend für Nutzinsekten",
    target: "",
    href: "",
    highlightDe: "Nicht bienengefährlich (B4)",
    highlightEn: "Nicht bienengefährlich (B4)",
    icon: CheckIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 5,
    contentDe: "Keine Nachbaubeschränkung",
    contentEn: "Keine Nachbaubeschränkung",
    target: "",
    href: "",
    highlightDe: "Keine Hangauflage",
    highlightEn: "Keine Hangauflage",
    icon: CheckIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 6,
    contentDe:
      "Hohe Wirkstoffpotenz d.h. geringe Wirkstoffausbringung und Gewässerbelastung",
    contentEn:
      "Hohe Wirkstoffpotenz d.h. geringe Wirkstoffausbringung und Gewässerbelastung",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: CheckIcon,
    iconBackground: "bg-green-lighter",
  },
  {
    id: 7,
    contentDe: "4x5l, 800l Palette",
    contentEn: "4x5l, 800l Palette",
    target: "",
    href: "",
    highlightDe: "",
    highlightEn: "",
    icon: CheckIcon,
    iconBackground: "bg-green-lighter",
  },
];

const section3 = [
  {
    descriptionDe: "Blattaktiv und schnell regenfest",
    descriptionEn: "Leaf active and fast rainfast",
  },
  {
    descriptionDe: "Gezielt, schnell & sicher im Nachauflauf",
    descriptionEn: "Leaf active and fast rainfast2",
  },
  {
    descriptionDe: "Solo stark gegen Kamille, Klette, Nachtschatten, Knöterich-Arten, Franzosenkraut u.a.",
    descriptionEn: "Leaf active and fast rainfast3",
  },
  {
    descriptionDe: "Wirkungsentfaltung weitgehend unabhängig von Strahlungsintensität oder Wachsschicht ",
    descriptionEn: "Leaf active and fast rainfast4",
  },
  {
    descriptionDe: "Terbuthylazin frei",
    descriptionEn: "Leaf active and fast rainfast5",
  },
  {
    descriptionDe: "Die Komplettlösung: Valentia plus Mesotrione",
    descriptionEn: "Leaf active and fast rainfast6",
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function crozier(props) {
  return (
    <>
      <section>
        <div className="py-10 bg-gradient-to-br from-green-black via-green-darker to-green-dark sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24 mt-16">
                  <a
                    href="#Valentia Corn"
                    className="inline-flex items-center text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                  </a>
                    <span className="px-3 py-0.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-light rounded-full">
                      {props.lang === "de" ? "Mais" : "Corn"}
                    </span>
                  <a
                    href="#ValentiaCereal"
                    className="inline-flex items-center text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-yellow-light rounded-full">
                      {props.lang === "de" ? "Getreide" : "Cereals"}
                    </span>
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">CROZIER</span>
                  </h1>
                  <p className="mt-3 text-xl text-green-light font-extrabold sm:mt-5 sm:text-xl lg:text-2xl uppercase">
                    Einzigartig in Mais – Top in Getreide
                  </p>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-2xl">
                    VALENTIA - MACHT den UNTERSCHIED
                  </p>
                  <div className="mt-8">
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
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-32 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md grid place-items-center sm:px-8 sm:max-w-2xl lg:max-w-none lg:px-0">
                  <img
                    className="w-full z-40 justify-item-center lg:absolute lg:inset-y-32 lg:left-16 lg:-ml-16 lg:h-96 lg:w-auto lg:max-w-none"
                    src={ValentiaIntro}
                    alt="Valentia Gebinde/Can"
                  />
                </div>
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
                src={ValentiaIntroImg}
                alt="Valentia Corn"
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-green-medium font-semibold tracking-wide uppercase">
                  Valentia
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
                              <div className="text-right font-bold text-sm whitespace-nowrap text-green-lighter">
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

      <section id="Valentia Corn">
        <div className="bg-white lg:px-8">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div>
              <a
                href="/"
                className="inline-flex items-center text-white bg-gray-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 mx-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-light rounded-full">
                  {props.lang === "de" ? "Mais" : "Corn"}
                </span>
              </a>

              <h2 className="mt-2 text-base font-semibold text-green-light uppercase tracking-wide">
                Valentia
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Einzigartig in Mais
              </p>
              <div className="grid place-items-center mt-6">
                <img alt="Corn" src={iconCorn} className="w-48" />
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-10 sm:space-y-3 items-center sm:grid sm:grid-cols-2 sm:grid-rows-3 ">
                {section3.map((content) => (
                  <div key={content.descriptionEn} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-dark"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {props.lang === "de"
                          ? content.descriptionDe
                          : content.descriptionEn}
                      </p>
                    </dt>
                    {/* <dd className="mt-2 ml-9 text-base text-gray-500">
                    {props.lang==='de' ? content.descriptionEn : content.descriptionDe}
                    </dd> */}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}
