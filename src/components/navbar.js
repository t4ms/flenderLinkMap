/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";

import formgroupLogoWhite from "../image/svg/formgroupLogoWhite.svg";
import formgroupLogoBlack from "../image/svg/formgroupLogoBlack.svg";
import agroformLogoWhite from "../image/svg/agroform_logo_white.svg";
import langDe from "../image/svg/lang_de.svg";
import langEn from "../image/svg/lang_en.svg";

import iconValentia from "../image/svg/ICON_fg_valentia.svg";
import iconCrozier from "../image/svg/ICON_fg_crozier.svg";
import iconBoltXl from "../image/svg/ICON_fg_boltXl.svg";
import iconHurler from "../image/svg/ICON_fg_hurler.svg";

import { Popover, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const popUpNav = [
  {
    name: "Valentia",
    mol: "(Fluroxypyr 100 g/l, Florasulam 2 g/l)",
    descriptionDe: "Einzigartig in Mais – Top in Getreide",
    descriptionEn: "Unique in corn - top in cereals",
    href: "./products/valentia",
    icon: iconValentia,
  },
  {
    name: "Crozier",
    description:
      "Das Basisherbizid inKartoffeln und der Resistenzbrecher im Getreide",
    mol: "(Prosulfocarb 800g/l)",
    href: "#",
    icon: iconCrozier,
  },
  {
    name: "BOLT XL",
    description: "Das Top Azol für Getreide und Raps",
    mol: "(Prothioconazol 250 g/l))",
    href: "#",
    icon: iconBoltXl,
  },
  {
    name: "Hurler",
    description: "Bewährt in Getreide und Grünland",
    mol: "(Fluroxypyr 180 g/l)",
    href: "#",
    icon: iconHurler,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Popover className="relative bg-transparent z-40">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <a href="/" className="flex">
              <span className="sr-only">formgroup</span>
              <img
                className="pb-2 h-8 w-auto sm:h-10"
                src={formgroupLogoWhite}
                alt="formgroups"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-fgDefault-light">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              {/* Nav 1 - Warum formgroup */}

              <a
                href="/home"
                className="text-base font-medium text-white border-transparent border-b hover:border-white focus:border-white"
              >
                {this.props.lang === "de"
                  ? "Mission & Vision"
                  : "Mission & Vision"}
              </a>

              {/* Nav 2 - Team */}

              <a
                href="/team"
                className="text-base font-medium text-white border-transparent border-b hover:border-white focus:border-white"
              >
                {this.props.lang === "de"
                  ? "Team & Regionen"
                  : "Team & Regions"}
              </a>

              {/* Nav 3 - Produkte & Lösungen */}

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "pb-2 group inline-flex items-center text-base font-medium border-transparent border-b hover:border-white focus:border-white"
                      )}
                    >
                      <span>
                        {this.props.lang === "de"
                          ? "Produkte & Lösungen"
                          : "Products & Solutions"}
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-72 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {popUpNav.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-36 w-36 text-white sm:h-24 sm:w-24">
                                  <img
                                    className="pb-2 h-24 w-auto sm:h-36"
                                    src={item.icon}
                                    alt={item.name}
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-sm font-light italic text-fgDefault-darker">
                                    {item.mol}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {this.state.lang === "de"
                                      ? item.descriptionDe
                                      : item.descriptionEn}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="p-5 bg-brown-dark hover:bg-brown-darker sm:p-8">
                            <a
                              href="/portfolio"
                              className="-m-3 p-3 flow-root rounded-md"
                            >

                      
                              

                              <div className="flex items-center">
                              <img
                                className="pb-2 h-6 mr-4 w-auto sm:h-10 inline-flex"
                                src={agroformLogoWhite}
                                alt="agroform"
                              /> 
                                <div className="text-base font-medium text-white">
                                {this.props.lang === "de"
                                    ? "- die digitale Agrarplattform der"
                                    : "- the digital agricultural platform of"}
                                  
                                </div>
                                <span className="ml-1 inline-flex items-center px-3 py-0.5 rounded-full text-base font-medium leading-5 bg-white text-black">
                                  {this.props.lang === "de"
                                    ? "formgroup"
                                    : "formgroup"}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-white">
                                {this.props.lang === "de"
                                  ? "Finden, vergleichen und informieren Sie sich über unsere innovativen Agrarprodukte, Lösungen."
                                  : "Find, compare and learn about the innovative agricultural products, solutions."}
                              </p>
              
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-fgDefault-darker p-1 rounded-full text-fgDefault-dark hover:text-white"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Language dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-fgDefault-darker flex text-sm rounded-full">
                    <span className="sr-only">Choose Language</span>

                    {this.props.lang === "de" ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={langDe}
                        alt="Deutsch"
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={langEn}
                        alt="English"
                      />
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={(e) => this.props.handleLangHome("de")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <img
                            className="h-8 w-8 rounded-full inline"
                            src={langDe}
                            alt="Deutsch"
                          />
                          Deutsch
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={(e) => this.props.handleLangHome("en")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <img
                            className="h-8 w-8 rounded-full inline"
                            src={langEn}
                            alt="English"
                          />
                          English
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={formgroupLogoBlack}
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-dgDefault-light">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {popUpNav.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-100"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-md text-white">
                          <img
                            className="pb-2 h-24 w-auto"
                            src={item.icon}
                            alt={item.name}
                          />
                        </div>
                        <span className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span className="ml-4 text-base italic text-fgDefault-darker">
                          {item.mol}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {this.props.lang === "de"
                      ? "Warum formgroup?"
                      : "Why formgroup?"}
                  </a>

                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Team
                  </a>

                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {this.props.lang === "de" ? "Leistungen" : "Services"}
                  </a>
                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {this.props.lang === "de" ? "Kontakt" : "Contact"}
                  </a>
                </div>
                <div className="mt-12 xl:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {this.props.lang === "de" ? "Sprache" : "Language"}
                  </h3>
                  {/* Language dropdown */}
                  <div className="grid grid-cols-2">
                    <div className="">
                      <button
                        onClick={(e) => this.props.handleLangHome("de")}
                        className="bg-white rounded-md px-16 py-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fgDefault-medium"
                      >
                        <img
                          className="h-8 w-8 rounded-full inline"
                          src={langDe}
                          alt="Deutsch"
                        />{" "}
                        German
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => this.props.handleLangHome("en")}
                        className="bg-white rounded-md px-16 py-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fgDefault-medium"
                      >
                        <img
                          className="h-8 w-8 rounded-full inline"
                          src={langEn}
                          alt="English"
                        />{" "}
                        English
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  }
}

export default Navbar;
