// components/Contact.js

import React from "react";

import Footer from "./footer";
import Navbar from "./navbar";

import linkIcon from "../image/svg/link.svg";

const people = [
  {
    id: 1,
    nameDe: "Thomas Schweers",
    nameEn: "Thomas Schweers",
    imageUrl: linkIcon,
    description: "thomas.schweers@flender-group.com",
    positionDe: "FLE IT WIN/CS",
    positionEn: "FLE IT WIN/CS",
  },
  {
    id: 2,
    nameDe: "Dirk Schaffeld",
    nameEn: "Dirk Schaffelds",
    imageUrl: linkIcon,
    description: "dirk.schaffeld@flender-group.com",
    positionDe: "HEAD FLE IT WIN/CS",
    positionEn: "HEAD FLE IT WIN/CS",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const contact = (props) => {
  return (
    <>
      <Navbar
        lang={props.lang}
        text={"black"}
        handleLangHome={props.handleLang}
      />
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="#227dc6"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-fgDefault-black"
                    fill="#227dc6"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-fgDefault-black"
                    fill="#227dc6"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="relative z-10 mb-4">
                <div className="text-base max-w-prose lg:max-w-none">
                  <h2 className="inline-flex items-center px-3 py-0.5 my-4 rounded-full text-md font-medium bg-blue-lighter text-blue-medium uppercase">
                    LinkMap
                  </h2>

                  <p className="mt-2 text-3xl leading-8 tracking-tight text-blue-medium sm:text-3xl uppercase">
                  {props.lang === "de" ? "Link oder Kontenpunkt hinzufügen" : "Add a Link or Item "}
                  </p>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {props.lang === "de" ?
                   "Sie würden gerne einen Link oder ein Kontenpunkt hinzufügen? Kein Problem melden Sie sich einfach bei uns und wir überlegen die Integration schnell und einfach gemeinsam" 
                   : "You would like to add a link or an account item? No problem, just get in touch with us and we'll work out the integration quickly and easily together."} 
                  </p>
                  <div>
                    <ul className="w-full divide-y divide-gray-200">
                      {people.map((item) => (
                        <li key={item.id} className="py-4">
                          <div className="flex space-x-3">
                            <img
                              className=" h-16 w-16 object-cover rounded-full"
                              src={item.imageUrl}
                              alt={item.nameEn}
                            />
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-md font-semibold text-blue-medium">
                                {props.lang === "de" ? item.nameDe : item.nameEn}
                                </h3>
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-dark text-white">
                                  {props.lang === "de" ? item.positionDe : item.positionEn}
                                </span>
                              </div>
                              <a href={classNames("mailto:", item.description)} className="text-sm text-fgDefault-dark">
                                {item.description}
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-fgDefault-black lg:mt-0">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
