import { React, Fragment, useState } from "react";

import agroformLogoWhite from "../../image/svg/agroform_logo_white.svg";
import formgroupLogoWhite from "../../image/svg/formgroupLogoWhite.svg";

// import iconProductfinder from "../../image/svg/agroProductfinder.svg";
// import iconAgroNews from "../../image/svg/agroNews.svg";
// import iconAgroWorkshop from "../../image/svg/agroWorkshop.svg";

import Index from "./index";
import Valentia from "./valentia";
import Crozier from "./crozier";
import Bolt from "./bolt";
import Hurler from "./hurler";

import langDe from "../../image/svg/lang_de.svg";
import langEn from "../../image/svg/lang_en.svg";

import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserGroupIcon, DocumentReportIcon, CubeIcon } from "@heroicons/react/outline";

const navigation = [
  {
    name: "Produktfinder",
    href: "/agroform#productfinder",
    icon: <CubeIcon
    className="h-6 w-6 text-white"
    aria-hidden="true"
  />,
    current: false,
  },
  { name: "Marktreport",
   href: "/agroform#Reports",
   icon:    <DocumentReportIcon
   className="h-6 w-6 text-white"
   aria-hidden="true"
 />,
   current: false
  },
  {
    name: "Workshops",
    href: "/agroform#Workshops",
    icon:    <UserGroupIcon
    className="h-6 w-6 text-white"
    aria-hidden="true"
  />,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Agroform(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Static sidebar for mobile */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-brown-medium">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full :outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <a href="/agroform">
                      <img
                        className="h-8 w-auto"
                        src={agroformLogoWhite}
                        alt="agroform"
                      />
                    </a>
                  </div>
                  <nav className="mt-8 px-4 space-y-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-brown-light text-white"
                            : "text-white hover:bg-brown-light hover:text-brown-dark",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        {item.icon}
                        <p className="pl-4">{item.name}</p>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="flex-shrink-0 flex border-t border-brown-light p-2 hover:bg-brown-light">
                  <div className="xl:mt-0">
                    <div className="grid grid-cols-1">
                      <a className="text-white" href="/">
                        <span className="font-bold">agro</span>form eine Plattform der
                        <br />
                        <img
                          className="h-8 w-32 grid"
                          src={formgroupLogoWhite}
                          alt="Deutsch"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 flex border-t border-brown-light p-4">
                  <div className="xl:mt-0">
                    <div className="grid grid-cols-2">
                      <div className="">
                        <button
                          onClick={(e) => props.handleLang("de")}
                          className="rounded-md px-6 py-2 inline-flex items-center justify-center text-white hover:bg-brown-light"
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
                          onClick={(e) => props.handleLang("en")}
                          className="rounded-md px-6 py-2 inline-flex items-center justify-center text-white hover:bg-brown-light"
                        >
                          <img
                            className="h-8 w-8 rounded-full inline"
                            src={langEn}
                            alt="English"
                          />
                          English
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-brown-light bg-brown-darker">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <a href="/agroform">
                  <img
                    className="h-6 w-auto"
                    src={agroformLogoWhite}
                    alt="agroform"
                  />
                </a>
              </div>
              <nav className="mt-8 flex-1 px-4 space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-brown-light text-white"
                        : "text-white hover:bg-brown-light",
                      "group flex items-center px-2 py-2 text-md font-medium rounded-md"
                    )}
                  >
      
                      {item.icon}
                    <p className="pl-4">{item.name}</p>
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-brown-light p-2 hover:bg-brown-light">
              <div className="xl:mt-0">
                <div className="grid grid-cols-1">
                  <a className="text-white" href="/">
                    <span className="font-bold">agro</span>form eine Plattform der
                    <br />
                    <img
                      className="h-8 w-32 grid"
                      src={formgroupLogoWhite}
                      alt="Deutsch"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex border-t border-brown-light p-2">
              <div className="xl:mt-0">
                <div className="grid grid-cols-2">
                  <div className="">
                    <button
                      onClick={(e) => props.handleLang("de")}
                      className="rounded-md px-4 py-2 inline-flex items-center justify-center text-white hover:bg-brown-light"
                    >
                      <img
                        className="h-6 w-6 rounded-full inline"
                        src={langDe}
                        alt="Deutsch"
                      />
                      German
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={(e) => props.handleLang("en")}
                      className="rounded-md px-4 py-2 inline-flex items-center justify-center text-white hover:bg-brown-light"
                    >
                      <img
                        className="h-6 w-6 rounded-full inline"
                        src={langEn}
                        alt="English"
                      />
                      English
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 pr-3 pt-3 bg-transparent">
            <div className="grid justify-items-end ...">
              <button
                type="button"
                className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:bg-white hover:bg-opacity-50 ring-1 ring-white"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <main className="flex-1">
            <div className="">
              <div className="-mt-16">
                {props.site === "valentia" ? (
                  <Valentia lang={props.lang} />
                ) : props.site === "crozier" ? (
                  <Crozier lang={props.lang} />
                ) : props.site === "bolt" ? (
                  <Bolt lang={props.lang} />
                ) : props.site === "hurler" ? (
                  <Hurler lang={props.lang} />
                ) : (
                  <Index lang={props.lang} />
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
