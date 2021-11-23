import { React, Fragment, useState } from "react";

import formgroupLogoBlack from "../image/svg/formgroupLogoBlack.svg";
import iconValentia from "../image/svg/ICON_fg_valentia.svg";
import iconCrozier from "../image/svg/ICON_fg_crozier.svg";
import iconBoltXl from "../image/svg/ICON_fg_boltXl.svg";
import iconHurler from "../image/svg/ICON_fg_hurler.svg";

import Valentia from "./product/valentia";

import langDe from "../image/svg/lang_de.svg";
import langEn from "../image/svg/lang_en.svg";

import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Valentia", href: "", icon: iconValentia, current: true },
  { name: "Crozier", href: "#", icon: iconCrozier, current: false },
  { name: "Bolt Xl", href: "#", icon: iconBoltXl, current: false },
  { name: "Hurler", href: "#", icon: iconHurler, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full">
      <body class="h-full">
      ```
    */}
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
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
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
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
                    <img
                      className="h-8 w-auto"
                      src={formgroupLogoBlack}
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-24"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <div className="xl:mt-0">
                    <div className="grid grid-cols-2">
                      <div className="">
                        <button
                          onClick={(e) => props.handleLang("de")}
                          className="bg-white rounded-md px-6 py-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fgDefault-medium"
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
                          className="bg-white rounded-md px-6 py-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fgDefault-medium"
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
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-6 w-auto"
                  src={formgroupLogoBlack}
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-16"
                      aria-hidden="true"
                    />
                    <p className="pl-4">{item.name}</p>
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="xl:mt-0">
                <div className="grid grid-cols-2">
                  <div className="">
                    <button
                      onClick={(e) => props.handleLang("de")}
                      className="bg-white rounded-md px-6 py-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fgDefault-medium"
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
                      className="bg-white rounded-md px-6 py-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fgDefault-medium"
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
                <Valentia lang={props.lang} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
